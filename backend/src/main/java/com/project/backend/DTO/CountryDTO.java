package com.project.backend.DTO;

import com.project.backend.Model.Country;

public class CountryDTO {
	private Long id;
	private String country;

	
	public CountryDTO() {
	}

	public CountryDTO(Long id, String country) {
		this.id = id;
		this.country = country;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}
	
	public static CountryDTO fromEntity(Country country) {
        if (country == null) {
            return null; // Avoid NullPointerException if entity is null
        }
        return new CountryDTO(country.getId(), country.getCountry());
    }
}
