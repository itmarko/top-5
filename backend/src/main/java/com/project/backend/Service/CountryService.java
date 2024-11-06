package com.project.backend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.backend.Model.Country;
import com.project.backend.Repository.CountryRepository;

@Service
public class CountryService {

	@Autowired
	private CountryRepository countryRepository;

	public Country saveCountry(Country country) {
	    
	    Optional<Country> existingCountry = countryRepository.findByCountry(country.getCountry());
	    if (existingCountry.isPresent()) {
	        return existingCountry.get();
	    }
	    return countryRepository.save(country);
	}

	public List<Country> getAllCountries() {
		return countryRepository.findAll();
	}

	public Optional<Country> getCountryById(Long id) {
		return countryRepository.findById(id);
	}
}
