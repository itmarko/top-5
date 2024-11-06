package com.project.backend.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.backend.Model.Address;
import com.project.backend.Model.City;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
	Optional<Address> findByStreetAndZipCode(String street, String zipCode);
}
