package com.project.backend.DTO;

import java.util.ArrayList;
import java.util.List;

import com.project.backend.Model.SocialMedia;

public class ContactInfoDTO {
	private Long id;

	private String name;
	private String relationWithCompany;
	private String businessPhone;
	private String email;
	private String mobileNumber;
	private String whatsapp;

	private List<SocialMedia> socialMediaLinks = new ArrayList<>();

	public ContactInfoDTO() {

	}

	public ContactInfoDTO(Long id, String name, String relationWithCompany, String businessPhone, String email,
			String mobileNumber, String whatsapp, List<SocialMedia> socialMediaLinks) {
		super();
		this.id = id;
		this.name = name;
		this.relationWithCompany = relationWithCompany;
		this.businessPhone = businessPhone;
		this.email = email;
		this.mobileNumber = mobileNumber;
		this.whatsapp = whatsapp;
		this.socialMediaLinks = socialMediaLinks;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRelationWithCompany() {
		return relationWithCompany;
	}

	public void setRelationWithCompany(String relationWithCompany) {
		this.relationWithCompany = relationWithCompany;
	}

	public String getBusinessPhone() {
		return businessPhone;
	}

	public void setBusinessPhone(String businessPhone) {
		this.businessPhone = businessPhone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getWhatsapp() {
		return whatsapp;
	}

	public void setWhatsapp(String whatsapp) {
		this.whatsapp = whatsapp;
	}

	public List<SocialMedia> getSocialMediaLinks() {
		return socialMediaLinks;
	}

	public void setSocialMediaLinks(List<SocialMedia> socialMediaLinks) {
		this.socialMediaLinks = socialMediaLinks;
	}

}
