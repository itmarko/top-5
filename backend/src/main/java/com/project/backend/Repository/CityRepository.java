package com.project.backend.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.project.backend.Model.City;
import com.project.backend.Model.State;

@Repository
public interface CityRepository extends JpaRepository<City, Long>, JpaSpecificationExecutor<City> {

	Optional<City> findByCityAndState(String city, State state);

	Optional<City> findByCity(String city);

}