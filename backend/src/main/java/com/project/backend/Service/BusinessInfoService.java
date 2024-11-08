package com.project.backend.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.backend.Component.BusinessInfoMapper;
import com.project.backend.DTO.BusinessInfoDTO;
import com.project.backend.Model.Address;
import com.project.backend.Model.BusinessInfo;
import com.project.backend.Model.City;
import com.project.backend.Model.ContactInfo;
import com.project.backend.Model.Country;
import com.project.backend.Model.SocialMedia;
import com.project.backend.Model.State;
import com.project.backend.Repository.AddressRepository;
import com.project.backend.Repository.BusinessInfoRepository;
import com.project.backend.Repository.CityRepository;
import com.project.backend.Repository.ContactInfoRepository;
import com.project.backend.Repository.CountryRepository;
import com.project.backend.Repository.StateRepository;

import jakarta.persistence.EntityNotFoundException;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Predicate;

@Service
public class BusinessInfoService {

	private final BusinessInfoRepository businessInfoRepository;
	private final ContactInfoRepository contactInfoRepository;
	private final CountryRepository countryRepository;
	private final StateRepository stateRepository;
	private final CityRepository cityRepository;
	private final AddressRepository addressRepository;
	private final ModelMapper modelMapper;
	@Autowired
	private BusinessInfoMapper businessInfoMapper;

	@Autowired
	public BusinessInfoService(BusinessInfoRepository businessInfoRepository,
			ContactInfoRepository contactInfoRepository, CountryRepository countryRepository,
			StateRepository stateRepository, CityRepository cityRepository, AddressRepository addressRepository,
			ModelMapper modelMapper) {
		this.businessInfoRepository = businessInfoRepository;
		this.contactInfoRepository = contactInfoRepository;
		this.countryRepository = countryRepository;
		this.stateRepository = stateRepository;
		this.cityRepository = cityRepository;
		this.addressRepository = addressRepository;
		this.modelMapper = modelMapper;
	}

	@Transactional
	public BusinessInfoDTO createBusinessInfo(BusinessInfoDTO businessInfoDTO) {
		// Reuse or create contact info
		ContactInfo contactInfo = contactInfoRepository.findByEmailAndBusinessPhoneAndWhatsapp(
				businessInfoDTO.getContactInfo().getEmail(), businessInfoDTO.getContactInfo().getBusinessPhone(),
				businessInfoDTO.getContactInfo().getWhatsapp()).orElseGet(() -> {
					ContactInfo newContactInfo = new ContactInfo();
					newContactInfo.setName(businessInfoDTO.getContactInfo().getName());
					newContactInfo.setRelationWithCompany(businessInfoDTO.getContactInfo().getRelationWithCompany());
					newContactInfo.setBusinessPhone(businessInfoDTO.getContactInfo().getBusinessPhone());
					newContactInfo.setEmail(businessInfoDTO.getContactInfo().getEmail());
					newContactInfo.setMobileNumber(businessInfoDTO.getContactInfo().getMobileNumber());
					newContactInfo.setWhatsapp(businessInfoDTO.getContactInfo().getWhatsapp());

					// Handle social media links
					if (businessInfoDTO.getContactInfo().getSocialMediaLinks() != null) {
						businessInfoDTO.getContactInfo().getSocialMediaLinks().forEach(socialMediaDTO -> {
							SocialMedia socialMedia = new SocialMedia();
							socialMedia.setPlatform(socialMediaDTO.getPlatform());
							socialMedia.setUrl(socialMediaDTO.getUrl());
							newContactInfo.addSocialMedia(socialMedia);
						});
					}
					return contactInfoRepository.save(newContactInfo);
				});

		// Reuse or create country, state, city, and address as before...
		// Reuse or create country
		Country country = countryRepository.findByCountry(businessInfoDTO.getCountry().getCountry()).orElseGet(() -> {
			Country newCountry = new Country();
			newCountry.setCountry(businessInfoDTO.getCountry().getCountry());
			return countryRepository.save(newCountry);
		});

		// Reuse or create state associated with the country
		State state = stateRepository.findByStateAndCountry(businessInfoDTO.getState().getState(), country)
				.orElseGet(() -> {
					State newState = new State();
					newState.setState(businessInfoDTO.getState().getState());
					newState.setCountry(country);
					return stateRepository.save(newState);
				});

		// Reuse or create city associated with the state
		City city = cityRepository.findByCityAndState(businessInfoDTO.getCity().getCity(), state).orElseGet(() -> {
			City newCity = new City();
			newCity.setCity(businessInfoDTO.getCity().getCity());
			newCity.setState(state);
			return cityRepository.save(newCity);
		});

		// Reuse or create address
		Address address = addressRepository.findByStreetAndZipCode(businessInfoDTO.getAddress().getStreet(),
				businessInfoDTO.getAddress().getZipCode()).orElseGet(() -> {
					Address newAddress = new Address();
					newAddress.setStreet(businessInfoDTO.getAddress().getStreet());
					newAddress.setZipCode(businessInfoDTO.getAddress().getZipCode());
					return addressRepository.save(newAddress);
				});

		// Check for existing BusinessInfo
		Optional<BusinessInfo> existingBusinessInfo = businessInfoRepository
				.findByCountryAndStateAndCityAndAddress(country, state, city, address);

		if (existingBusinessInfo.isPresent()) {
			return modelMapper.map(existingBusinessInfo.get(), BusinessInfoDTO.class);
		}

		// Proceed to create a new BusinessInfo if none exists
		BusinessInfo businessInfo = modelMapper.map(businessInfoDTO, BusinessInfo.class);
		businessInfo.setContactInfo(contactInfo);
		businessInfo.setCountry(country);
		businessInfo.setState(state);
		businessInfo.setCity(city);
		businessInfo.setAddress(address);

		// Map and set tags
		if (businessInfoDTO.getTags() != null) {
			businessInfo.setTags(businessInfoDTO.getTags());
		}

		// Save and return BusinessInfoDTO
		BusinessInfo savedBusinessInfo = businessInfoRepository.save(businessInfo);
		return modelMapper.map(savedBusinessInfo, BusinessInfoDTO.class);
	}

	public List<BusinessInfoDTO> getAllBusinessInfos() {
		return businessInfoRepository.findAll().stream()
				.map(businessInfo -> modelMapper.map(businessInfo, BusinessInfoDTO.class)).toList();
	}

	public BusinessInfoDTO getBusinessInfoById(Long id) {
		BusinessInfo businessInfo = businessInfoRepository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("BusinessInfo not found with id: " + id));
		return modelMapper.map(businessInfo, BusinessInfoDTO.class);
	}

	public void deleteBusinessInfo(Long id) {
		if (!businessInfoRepository.existsById(id)) {
			throw new EntityNotFoundException("BusinessInfo not found with id: " + id);
		}
		businessInfoRepository.deleteById(id);
	}

	// Method to get business info by city and optionally by business category
	public Optional<List<BusinessInfoDTO>> getBusinessInfoByCityNameAndBusinessCategory(String city,
			String businessCategory) {

		Specification<BusinessInfo> specification = (root, query, criteriaBuilder) -> {
			Join<BusinessInfo, City> cityJoin = root.join("city");
			Predicate cityPredicate = criteriaBuilder.equal(criteriaBuilder.lower(cityJoin.get("city")),
					city.toLowerCase());

			// Check if a business category is provided
			if (businessCategory != null && !businessCategory.isEmpty()) {
				Predicate categoryPredicate = criteriaBuilder.equal(root.get("businessCategory"), businessCategory);
				return criteriaBuilder.and(cityPredicate, categoryPredicate);
			}
			return cityPredicate;
		};

		List<BusinessInfo> businessInfoList = businessInfoRepository.findAll(specification);
		List<BusinessInfoDTO> businessInfoDTOList = businessInfoList.stream().map(businessInfoMapper::toDTO)
				.collect(Collectors.toList());

		return businessInfoDTOList.isEmpty() ? Optional.empty() : Optional.of(businessInfoDTOList);
	}

	// Method to get business info by city name only
	public Optional<List<BusinessInfoDTO>> getBusinessInfoByCityName(String cityName) {
		Specification<BusinessInfo> specification = (root, query, criteriaBuilder) -> {
			Join<BusinessInfo, City> cityJoin = root.join("city");
			return criteriaBuilder.like(criteriaBuilder.lower(cityJoin.get("city")),
					"%" + cityName.toLowerCase() + "%");
		};

		List<BusinessInfo> businessInfoList = businessInfoRepository.findAll(specification);
		List<BusinessInfoDTO> businessInfoDTOList = businessInfoList.stream().map(businessInfoMapper::toDTO)
				.collect(Collectors.toList());

		return businessInfoDTOList.isEmpty() ? Optional.empty() : Optional.of(businessInfoDTOList);
	}

}
