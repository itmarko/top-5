package com.project.backend.Component;

import org.springframework.stereotype.Component;

import com.project.backend.DTO.AddressDTO;
import com.project.backend.DTO.BusinessInfoDTO;
import com.project.backend.DTO.CityDTO;
import com.project.backend.DTO.CountryDTO;
import com.project.backend.DTO.StateDTO;
import com.project.backend.Model.BusinessInfo;

@Component
public class BusinessInfoMapper {

	// Method to convert BusinessInfo to BusinessInfoDTO
	public BusinessInfoDTO toDTO(BusinessInfo businessInfo) {
		BusinessInfoDTO dto = new BusinessInfoDTO();
		dto.setId(businessInfo.getId());
		dto.setBusinessName(businessInfo.getBusinessName());
		dto.setBusinessMoNumber(businessInfo.getBusinessMoNumber());
		dto.setBusinessService(businessInfo.getBusinessService());
		dto.setBusinessWebsite(businessInfo.getBusinessWebsite());
		dto.setBusinessCategory(businessInfo.getBusinessCategory());
		dto.setBusinessSubCategory(businessInfo.getBusinessSubCategory());
		dto.setBusinessHoursFrom(businessInfo.getBusinessHoursFrom());
		dto.setBusinessHoursTo(businessInfo.getBusinessHoursTo());

		// Map ContactInfo object (Assuming ContactInfo is a nested object in
		// BusinessInfo)
		dto.setContactInfo(businessInfo.getContactInfo());

		// Map working days and tags (Assuming these are lists in BusinessInfo)
		dto.setWorkingDays(businessInfo.getWorkingDays());
		dto.setTags(businessInfo.getTags());

		// Map CountryDTO, StateDTO, CityDTO (Using fromEntity method for each DTO)
		if (businessInfo.getCountry() != null) {
			dto.setCountry(CountryDTO.fromEntity(businessInfo.getCountry()));
		}
		if (businessInfo.getState() != null) {
			dto.setState(StateDTO.fromEntity(businessInfo.getState()));
		}
		if (businessInfo.getCity() != null) {
			dto.setCity(CityDTO.fromEntity(businessInfo.getCity()));
		}

		// Map AddressDTO (Only if Address is not null)
		if (businessInfo.getAddress() != null) {
			AddressDTO addressDTO = new AddressDTO(businessInfo.getAddress().getId(),
					businessInfo.getAddress().getStreet(), businessInfo.getAddress().getZipCode());
			dto.setAddress(addressDTO);
		}

		return dto;
	}
}
