package com.project.backend.DTO;

public class LocationResponseDTO {

	private String country;
	private String state;
	private String city;
	private byte[] image;

	public LocationResponseDTO() {
	}

	public LocationResponseDTO(String country, String state, String city, byte[] image) {
		this.country = country;
		this.state = state;
		this.city = city;
		this.image = image;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

}
