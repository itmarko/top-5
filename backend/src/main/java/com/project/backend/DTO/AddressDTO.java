package com.project.backend.DTO;

public class AddressDTO {
	private Long id;
	private String street;
	private String zipCode;

	
	public AddressDTO() {
	}

	public AddressDTO(Long id, String street, String zipCode) {
		this.id = id;
		this.street = street;
		this.zipCode = zipCode;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

}
