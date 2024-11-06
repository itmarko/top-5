package com.project.backend.DTO;

public class LocationResponseDTO {

	private String country;
	private String state;
	private String city;
	private byte[] cityImage;

	public LocationResponseDTO() {
	}

	public LocationResponseDTO(String country, String state, String city, byte[] cityImage) {
		this.country = country;
		this.state = state;
		this.city = city;
		this.cityImage = cityImage;
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

	public byte[] getCityImage() {
		return cityImage;
	}

	public void setCityImage(byte[] cityImage) {
		this.cityImage = cityImage;
	}

}
