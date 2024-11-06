package com.project.backend.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.backend.Model.Country;
import com.project.backend.Model.State;

@Repository
public interface StateRepository extends JpaRepository<State, Long> {
    Optional<State> findByStateAndCountry(String state, Country country);
}