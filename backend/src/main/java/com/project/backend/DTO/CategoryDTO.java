package com.project.backend.DTO;

import java.time.LocalDateTime;
import java.util.List;

import com.project.backend.Model.SubCategory;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.OneToMany;

public class CategoryDTO {
	private Long id;
	private String categoryName;
	private List<SubCategory> subCategory;
	private boolean isActive;
	private LocalDateTime createDate;
	private LocalDateTime updateDate;

	public CategoryDTO() {
	}

	public CategoryDTO(Long id, String categoryName, List<SubCategory> subCategory, boolean isActive,
			LocalDateTime createDate, LocalDateTime updateDate) {
		this.id = id;
		this.categoryName = categoryName;
		this.subCategory = subCategory;
		this.isActive = isActive;
		this.createDate = createDate;
		this.updateDate = updateDate;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public List<SubCategory> getSubCategory() {
		return subCategory;
	}

	public void setSubCategory(List<SubCategory> subCategory) {
		this.subCategory = subCategory;
	}

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}

	public LocalDateTime getCreateDate() {
		return createDate;
	}

	public void setCreateDate(LocalDateTime createDate) {
		this.createDate = createDate;
	}

	public LocalDateTime getUpdateDate() {
		return updateDate;
	}

	public void setUpdateDate(LocalDateTime updateDate) {
		this.updateDate = updateDate;
	}

}
