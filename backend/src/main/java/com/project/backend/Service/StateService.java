package com.project.backend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.backend.Exception.DuplicateEntryException;
import com.project.backend.Model.Country;
import com.project.backend.Model.State;
import com.project.backend.Repository.StateRepository;

@Service
public class StateService {

    @Autowired
    private StateRepository stateRepository;

    @Autowired
    private CountryService countryService;

    public State saveState(State state, Long countryId) {
        Optional<Country> country = countryService.getCountryById(countryId);
        if (country.isEmpty()) {
            throw new IllegalArgumentException("Country not found with id: " + countryId);
        }
        state.setCountry(country.get());

        Optional<State> existingState = stateRepository.findByStateAndCountry(state.getState(), country.get());
        if (existingState.isPresent()) {
            throw new DuplicateEntryException("State with the same name already exists in the country");
        }

        return stateRepository.save(state);
    }

    public List<State> getAllStates() {
        return stateRepository.findAll();
    }

    public Optional<State> getStateById(Long id) {
        return stateRepository.findById(id);
    }
}
