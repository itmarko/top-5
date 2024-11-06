package com.project.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.backend.Model.SocialMedia;
@Repository
public interface SocialMediaRepository extends JpaRepository<SocialMedia, Long>{

}
