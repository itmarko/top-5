package com.project.backend.DTO;

import java.time.LocalDateTime;

import com.project.backend.Model.Category;

public class SubCategoryDTO {
	private Long id;
	private String subCategory;
	private Category category;

	public SubCategoryDTO() {
	}

	public SubCategoryDTO(Long id, String subCategory, Category category) {
		this.id = id;
		this.subCategory = subCategory;
		this.category = category;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSubCategory() {
		return subCategory;
	}

	public void setSubCategory(String subCategory) {
		this.subCategory = subCategory;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

}
