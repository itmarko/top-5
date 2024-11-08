package com.project.backend.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.backend.DTO.CityResponseDTO;
import com.project.backend.Exception.DuplicateEntryException;
import com.project.backend.Model.City;
import com.project.backend.Service.CityService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/cities")
public class CityController {

	@Autowired
	private final CityService cityService;

	public CityController(CityService cityService) {
		this.cityService = cityService;
	}

	@PostMapping
	public ResponseEntity<City> createCity(@RequestBody City city, @RequestParam Long stateId) {
		try {
			City savedCity = cityService.saveCity(city, stateId);
			return new ResponseEntity<>(savedCity, HttpStatus.CREATED);
		} catch (IllegalArgumentException | DuplicateEntryException e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping()
	public List<CityResponseDTO> getAllCities() {
		List<City> cities = cityService.getAllCities();
		List<CityResponseDTO> response = cities.stream()
//				.map(city -> new CityResponseDTO(city.getState().getCountry().getCountry(), city.getState().getState(),
//						city.getCity(), city.getImage()))
				.map(city -> new CityResponseDTO(city.getId(),city.getCity(), city.getImage())).toList();

		return response;
	}

	// Get City by Name
	@GetMapping("/{cityName}")
	public ResponseEntity<CityResponseDTO> getCityByName(@PathVariable String cityName) {
		Optional<City> city = cityService.getCityByName(cityName);
		if (city.isPresent()) {
			City cityData = city.get();
//			CityResponseDTO responseDTO = new CityResponseDTO(
//	                cityData.getState().getCountry().getCountry(),
//	                cityData.getState().getState(),
//	                cityData.getCity(),
//	                cityData.getImage()
//	            );
			CityResponseDTO responseDTO = new CityResponseDTO(cityData.getId(),cityData.getCity(), cityData.getImage());

			return new ResponseEntity<>(responseDTO, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}
}
