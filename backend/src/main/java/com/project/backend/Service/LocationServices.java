package com.project.backend.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.backend.DTO.LocationDTO;
import com.project.backend.DTO.LocationResponseDTO;
import com.project.backend.Model.City;
import com.project.backend.Model.Country;
import com.project.backend.Model.State;
import com.project.backend.Repository.CityRepository;
import com.project.backend.Repository.CountryRepository;
import com.project.backend.Repository.StateRepository;

@Service
public class LocationServices {

	private final CountryRepository countryRepository;
	private final StateRepository stateRepository;
	private final CityRepository cityRepository;

	@Autowired
	public LocationServices(CountryRepository countryRepository, StateRepository stateRepository,
			CityRepository cityRepository) {
		this.countryRepository = countryRepository;
		this.stateRepository = stateRepository;
		this.cityRepository = cityRepository;
	}

	public City addLocation(LocationDTO locationDTO) {
		Country country = countryRepository.findByCountry(locationDTO.getCountry()).orElseGet(() -> {
			Country newCountry = new Country();
			newCountry.setCountry(locationDTO.getCountry());
			return countryRepository.save(newCountry);
		});

		State state = stateRepository.findByStateAndCountry(locationDTO.getState(), country).orElseGet(() -> {
			State newState = new State();
			newState.setState(locationDTO.getState());
			newState.setCountry(country);
			return stateRepository.save(newState);
		});

		City city = cityRepository.findByCityAndState(locationDTO.getCity(), state).orElseGet(() -> {
			City newCity = new City();
			newCity.setCity(locationDTO.getCity());
			newCity.setState(state);

			if (locationDTO.getImage() != null && locationDTO.getImage().length > 0) {
				newCity.setImage(locationDTO.getImage());
			}

			return cityRepository.save(newCity);
		});

		return city;
	}

	public List<LocationResponseDTO> getAllCities() {
		return cityRepository.findAll().stream()
				.map(city -> new LocationResponseDTO(city.getState().getCountry().getCountry(),
						city.getState().getState(), city.getCity(), city.getImage()))
				.collect(Collectors.toList());
	}
}
