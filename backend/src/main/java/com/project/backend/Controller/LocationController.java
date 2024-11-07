package com.project.backend.Controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.project.backend.DTO.LocationDTO;
import com.project.backend.DTO.LocationResponseDTO;
import com.project.backend.Model.City;
import com.project.backend.Service.CityService;
import com.project.backend.Service.LocationServices;

import jakarta.servlet.http.HttpServletRequest;

@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RestController
@RequestMapping("/api/locations")
public class LocationController {
	@Autowired
	private final LocationServices locationServices;

	@Autowired
	private final CityService cityService;

	public LocationController(LocationServices locationServices, CityService cityService) {
		this.locationServices = locationServices;
		this.cityService = cityService;
	}

//	@PostMapping()
//	public ResponseEntity<LocationResponseDTO> addLocation(
//			@RequestParam LocationDTO locationDTO,
//            @RequestParam MultipartFile image,
//			HttpServletRequest request) {
//		City city = locationServices.addLocation(locationDTO);
//
//		LocationResponseDTO responseDTO = new LocationResponseDTO(city.getState().getCountry().getCountry(),
//				city.getState().getState(), city.getCity(), city.getImage());
//
//		return ResponseEntity.ok(responseDTO);
//	}

	@PostMapping()
	public ResponseEntity<?> addLocation(@RequestParam String city, @RequestParam String state,
			@RequestParam String country, @RequestParam MultipartFile image, HttpServletRequest request) {

		try {
			// Log image info
//	        System.out.println("Image received: " + (image.isEmpty() ? "No image" : "Image size: " + image.getSize()));

			LocationDTO locationDTO = new LocationDTO();
			locationDTO.setCity(city);
			locationDTO.setState(state);
			locationDTO.setCountry(country);

			if (!image.isEmpty()) {
				locationDTO.setImage(image.getBytes());
			}

			City addedCity = locationServices.addLocation(locationDTO);

			LocationResponseDTO responseDTO = new LocationResponseDTO(addedCity.getState().getCountry().getCountry(),
					addedCity.getState().getState(), addedCity.getCity(), addedCity.getImage());

			return ResponseEntity.status(HttpStatus.CREATED).body(responseDTO);

		} catch (IOException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error processing the image: " + e.getMessage());
		} catch (Exception e) {
			LoggerFactory.getLogger(LocationController.class).error("Error adding location", e);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Error adding location: " + e.getMessage());
		}
	}

	@GetMapping("/city/{cityName}")
	public ResponseEntity<LocationResponseDTO> getCityByName(@PathVariable String cityName) {
		Optional<City> cityOpt = cityService.getCityByName(cityName);

		if (cityOpt.isPresent()) {
			City city = cityOpt.get();

			LocationResponseDTO responseDTO = new LocationResponseDTO(city.getState().getCountry().getCountry(),
					city.getState().getState(), city.getCity(), city.getImage());

			return ResponseEntity.ok(responseDTO);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@GetMapping("/cities")
	public ResponseEntity<List<LocationResponseDTO>> getAllCities() {
		List<LocationResponseDTO> cities = locationServices.getAllCities();
		return ResponseEntity.ok(cities);
	}

}
