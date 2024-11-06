package com.project.backend.DTO;

import java.util.ArrayList;
import java.util.List;

import com.project.backend.Model.ContactInfo;

public class BusinessInfoDTO {
	private Long id;
	private String businessName;
	private String businessMoNumber;
	private String businessService;
	private String businessWebsite;
	private String businessCategory;
	private String businessSubCategory;

	private String businessHoursFrom;
	private String businessHoursTo;
	private ContactInfo contactInfo;
	private List<String> workingDays = new ArrayList<>();
	private List<String> tags = new ArrayList<>();
	private CountryDTO country;
	private StateDTO state;
	private CityDTO city;
	private AddressDTO address;

	public BusinessInfoDTO() {
	}

	public BusinessInfoDTO(Long id, String businessName, String businessMoNumber, String businessService,
			String businessWebsite, String businessCategory, String businessSubCategory, String businessHoursFrom,
			String businessHoursTo, ContactInfo contactInfo, List<String> workingDays, List<String> tags,
			CountryDTO country, StateDTO state, CityDTO city, AddressDTO address) {
		super();
		this.id = id;
		this.businessName = businessName;
		this.businessMoNumber = businessMoNumber;
		this.businessService = businessService;
		this.businessWebsite = businessWebsite;
		this.businessCategory = businessCategory;
		this.businessSubCategory = businessSubCategory;
		this.businessHoursFrom = businessHoursFrom;
		this.businessHoursTo = businessHoursTo;
		this.contactInfo = contactInfo;
		this.workingDays = workingDays;
		this.tags = tags;
		this.country = country;
		this.state = state;
		this.city = city;
		this.address = address;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBusinessName() {
		return businessName;
	}

	public void setBusinessName(String businessName) {
		this.businessName = businessName;
	}

	public String getBusinessMoNumber() {
		return businessMoNumber;
	}

	public void setBusinessMoNumber(String businessMoNumber) {
		this.businessMoNumber = businessMoNumber;
	}

	public String getBusinessService() {
		return businessService;
	}

	public void setBusinessService(String businessService) {
		this.businessService = businessService;
	}

	public String getBusinessWebsite() {
		return businessWebsite;
	}

	public void setBusinessWebsite(String businessWebsite) {
		this.businessWebsite = businessWebsite;
	}

	public String getBusinessCategory() {
		return businessCategory;
	}

	public void setBusinessCategory(String businessCategory) {
		this.businessCategory = businessCategory;
	}

	public String getBusinessSubCategory() {
		return businessSubCategory;
	}

	public void setBusinessSubCategory(String businessSubCategory) {
		this.businessSubCategory = businessSubCategory;
	}

	public String getBusinessHoursFrom() {
		return businessHoursFrom;
	}

	public void setBusinessHoursFrom(String businessHoursFrom) {
		this.businessHoursFrom = businessHoursFrom;
	}

	public String getBusinessHoursTo() {
		return businessHoursTo;
	}

	public void setBusinessHoursTo(String businessHoursTo) {
		this.businessHoursTo = businessHoursTo;
	}

	public ContactInfo getContactInfo() {
		return contactInfo;
	}

	public void setContactInfo(ContactInfo contactInfo) {
		this.contactInfo = contactInfo;
	}

	public List<String> getWorkingDays() {
		return workingDays;
	}

	public void setWorkingDays(List<String> workingDays) {
		this.workingDays = workingDays;
	}

	public List<String> getTags() {
		return tags;
	}

	public void setTags(List<String> tags) {
		this.tags = tags;
	}

	public CountryDTO getCountry() {
		return country;
	}

	public void setCountry(CountryDTO country) {
		this.country = country;
	}

	public StateDTO getState() {
		return state;
	}

	public void setState(StateDTO state) {
		this.state = state;
	}

	public CityDTO getCity() {
		return city;
	}

	public void setCity(CityDTO city) {
		this.city = city;
	}

	public AddressDTO getAddress() {
		return address;
	}

	public void setAddress(AddressDTO address) {
		this.address = address;
	}

}
