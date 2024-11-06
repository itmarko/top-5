package com.project.backend.Model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class BusinessInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String businessName;
	private String businessMoNumber;
	private String businessService;
	private String businessWebsite;
	private String businessCategory;
	private String businessSubCategory;

	private String businessHoursFrom;
	private String businessHoursTo;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "contact_info_id")
	private ContactInfo contactInfo;

	@ElementCollection
	@CollectionTable(name = "working_days", joinColumns = @JoinColumn(name = "business_info_id"))
	private List<String> workingDays = new ArrayList<>();

	@ElementCollection
	@CollectionTable(name = "business_tags", joinColumns = @JoinColumn(name = "business_info_id"))
	private List<String> tags = new ArrayList<>(); 

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "country_id")
	private Country country;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "state_id")
	private State state;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "city_id")
	private City city;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "address_id")
	private Address address;

	@OneToMany(mappedBy = "businessInfo", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Feedback> feedbacks = new ArrayList<>();

	public BusinessInfo() {
	}

	public BusinessInfo(Long id, String businessName, String businessMoNumber, String businessService,
			String businessWebsite, String businessCategory, String businessSubCategory, String businessHoursFrom,
			String businessHoursTo, ContactInfo contactInfo, List<String> workingDays, List<String> tags,
			Country country, State state, City city, Address address) {
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

	// Getters and Setters for the fields

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

	public Country getCountry() {
		return country;
	}

	public void setCountry(Country country) {
		this.country = country;
	}

	public State getState() {
		return state;
	}

	public void setState(State state) {
		this.state = state;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public List<Feedback> getFeedbacks() {
		return feedbacks;
	}

	public void setFeedbacks(List<Feedback> feedbacks) {
		this.feedbacks = feedbacks;
	}
}
