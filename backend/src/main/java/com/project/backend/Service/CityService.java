package com.project.backend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.project.backend.Exception.DuplicateEntryException;
import com.project.backend.Model.City;
import com.project.backend.Model.State;
import com.project.backend.Repository.CityRepository;

@Service
public class CityService {

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    private StateService stateService;

    public City saveCity(City city, Long stateId) {
        Optional<State> state = stateService.getStateById(stateId);
        if (state.isEmpty()) {
            throw new IllegalArgumentException("State not found with id: " + stateId);
        }
        city.setState(state.get());

        Optional<City> existingCity = cityRepository.findByCityAndState(city.getCity(), state.get());
        if (existingCity.isPresent()) {
            throw new DuplicateEntryException("City with the same name already exists in the state");
        }

        return cityRepository.save(city);
    }

    public List<City> getAllCities() {
        return cityRepository.findAll();
    }

//    public Optional<City> getCityById(Long id) {
//        return cityRepository.findById(id);
//    }
    

    // New method to find city by name
    public Optional<City> getCityByName(String cityName) {
        return cityRepository.findAll(getCitySpecification(cityName)).stream().findFirst();
    }

    // Specification to create LIKE condition for city name
    private Specification<City> getCitySpecification(String cityName) {
        return (root, query, criteriaBuilder) -> {
            if (cityName != null && !cityName.isEmpty()) {
                String searchPattern = "%" + cityName.toLowerCase() + "%";
                return criteriaBuilder.like(criteriaBuilder.lower(root.get("city")), searchPattern);
            }
            return null;
        };
    }
}
