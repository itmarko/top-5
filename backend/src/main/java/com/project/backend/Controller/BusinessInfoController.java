package com.project.backend.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.backend.DTO.BusinessInfoDTO;
import com.project.backend.Service.BusinessInfoService;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/api/business-info")
public class BusinessInfoController {

	private final BusinessInfoService businessInfoService;

	@Autowired
	public BusinessInfoController(BusinessInfoService businessInfoService) {
		this.businessInfoService = businessInfoService;
	}

	@PostMapping
	public ResponseEntity<BusinessInfoDTO> createBusinessInfo(@RequestBody BusinessInfoDTO businessInfoDTO) {
		BusinessInfoDTO createdBusinessInfo = businessInfoService.createBusinessInfo(businessInfoDTO);
		return new ResponseEntity<>(createdBusinessInfo, HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<BusinessInfoDTO>> getAllBusinessInfos() {
		List<BusinessInfoDTO> businessInfos = businessInfoService.getAllBusinessInfos();
		return new ResponseEntity<>(businessInfos, HttpStatus.OK);
	}

	@GetMapping("/{city}")
	public ResponseEntity<?> getBusinessInfoByCity(@PathVariable String city) {

		Optional<List<BusinessInfoDTO>> businesses = businessInfoService.getBusinessInfoByCityName(city);

		if (businesses.isPresent() && !businesses.get().isEmpty()) {
			return new ResponseEntity<>(businesses.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>("No businesses found for the given criteria", HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/{city}/{businessCategory}")
	public ResponseEntity<?> getBusinessInfoByCityAndCategory(@PathVariable String city,
			@PathVariable(required = false) String businessCategory) {

		Optional<List<BusinessInfoDTO>> businesses;

		if (businessCategory != null && !businessCategory.isEmpty()) {
			businesses = businessInfoService.getBusinessInfoByCityNameAndBusinessCategory(city, businessCategory);
		} else {
			businesses = businessInfoService.getBusinessInfoByCityName(city);
		}

		if (businesses.isPresent() && !businesses.get().isEmpty()) {
			return new ResponseEntity<>(businesses.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>("No businesses found for the given criteria", HttpStatus.NOT_FOUND);
		}
	}

//	@GetMapping("/{id}")
//	public ResponseEntity<BusinessInfoDTO> getBusinessInfoById(@PathVariable Long id) {
//		try {
//			BusinessInfoDTO businessInfo = businessInfoService.getBusinessInfoById(id);
//			return new ResponseEntity<>(businessInfo, HttpStatus.OK);
//		} catch (EntityNotFoundException e) {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteBusinessInfo(@PathVariable Long id) {
		try {
			businessInfoService.deleteBusinessInfo(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (EntityNotFoundException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
