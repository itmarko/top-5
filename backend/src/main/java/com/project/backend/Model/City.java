package com.project.backend.Model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class City {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(unique = true)
	private String city;

	@ManyToOne
	@JoinColumn(name = "state_id")
	private State state;

	@OneToMany(mappedBy = "city", cascade = CascadeType.ALL)
	private List<BusinessInfo> businesses = new ArrayList<>();
	
	@Lob
	private byte[] image;

	public City() {

	}

	public City(Long id, String city, State state, List<BusinessInfo> businesses, byte[] image) {
		super();
		this.id = id;
		this.city = city;
		this.state = state;
		this.businesses = businesses;
		this.image = image;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public State getState() {
		return state;
	}

	public void setState(State state) {
		this.state = state;
	}

	public List<BusinessInfo> getBusinesses() {
		return businesses;
	}

	public void setBusinesses(List<BusinessInfo> businesses) {
		this.businesses = businesses;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

}
