package com.project.backend.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.backend.Model.Address;
import com.project.backend.Model.BusinessInfo;
import com.project.backend.Model.City;
import com.project.backend.Model.Country;
import com.project.backend.Model.State;

@Repository
public interface BusinessInfoRepository extends JpaRepository<BusinessInfo, Long> {
    Optional<BusinessInfo> findByCountryAndStateAndCityAndAddress(
        Country country, State state, City city, Address address);
}

