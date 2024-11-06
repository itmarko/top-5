package com.project.backend.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.backend.DTO.LocationDTO;
import com.project.backend.DTO.LocationResponseDTO;
import com.project.backend.Model.City;
import com.project.backend.Service.CityService;
import com.project.backend.Service.LocationServices;

@RestController
@RequestMapping("/api/locations")
public class LocationController {
	@Autowired
	private final LocationServices locationServices;
	
	@Autowired
    private final CityService cityService;
	
	public LocationController(LocationServices locationServices, CityService cityService) {
		this.locationServices = locationServices;
		this.cityService=cityService;
	}
	
	@PostMapping
	public ResponseEntity<LocationResponseDTO> addLocation(@RequestBody LocationDTO locationDTO) {
	    City city = locationServices.addLocation(locationDTO);

	    LocationResponseDTO responseDTO = new LocationResponseDTO(
	        city.getState().getCountry().getCountry(),
	        city.getState().getState(),
	        city.getCity(),
	        city.getImage()
	    );

	    return ResponseEntity.ok(responseDTO);
	}
	
	@GetMapping("/city/{cityName}")
    public ResponseEntity<LocationResponseDTO> getCityByName(@PathVariable String cityName) {
        Optional<City> cityOpt = cityService.getCityByName(cityName);

        if (cityOpt.isPresent()) {
            City city = cityOpt.get();

            LocationResponseDTO responseDTO = new LocationResponseDTO(
                city.getState().getCountry().getCountry(),
                city.getState().getState(),
                city.getCity(),
                city.getImage()
            );

            return ResponseEntity.ok(responseDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
	
}
