package com.project.backend.DTO;

import java.util.Arrays;

public class CityResponseDTO {
//	private String country;
//	private String state;
	private Long id;
	private String city;
	private byte[] image;

	public CityResponseDTO() {
	}

	public CityResponseDTO(Long id, String city, byte[] image) {
		super();
		this.id = id;
		this.city = city;
		this.image = image;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	@Override
	public String toString() {
		return "CityResponseDTO [id=" + id + ", city=" + city + ", image=" + Arrays.toString(image) + "]";
	}

	
}
