package com.project.backend.Model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class ContactInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;
	private String relationWithCompany;
	private String businessPhone;
	private String email;
	private String mobileNumber;
	private String whatsapp;

	@OneToMany(mappedBy = "contactInfo", cascade = CascadeType.ALL)
	private List<SocialMedia> socialMediaLinks = new ArrayList<>();

	public ContactInfo() {
	}

	public ContactInfo(Long id, String name, String relationWithCompany, String businessPhone, String email,
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

	public void addSocialMedia(SocialMedia socialMedia) {
		socialMedia.setContactInfo(this);
		socialMediaLinks.add(socialMedia);
	}

	public void removeSocialMedia(SocialMedia socialMedia) {
		socialMediaLinks.remove(socialMedia);
		socialMedia.setContactInfo(null);
	}

	@Override
	public String toString() {
		return "ContactInfo{" + "id=" + id + ", name='" + name + '\'' + ", relationWithCompany='" + relationWithCompany
				+ '\'' + ", businessPhone='" + businessPhone + '\'' + ", email='" + email + '\'' + ", mobileNumber='"
				+ mobileNumber + '\'' + ", whatsapp='" + whatsapp + '\'' + ", socialMediaLinks=" + socialMediaLinks
				+ '}';
	}
}
