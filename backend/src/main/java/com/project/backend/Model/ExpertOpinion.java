package com.project.backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class ExpertOpinion {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String expertOpinion;

	public ExpertOpinion() {
	}

	public ExpertOpinion(Long id, String expertOpinion) {
		this.id = id;
		this.expertOpinion = expertOpinion;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getExpertOpinion() {
		return expertOpinion;
	}

	public void setExpertOpinion(String expertOpinion) {
		this.expertOpinion = expertOpinion;
	}

}
