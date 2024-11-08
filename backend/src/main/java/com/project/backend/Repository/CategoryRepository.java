package com.project.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.backend.Model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{
	
}
