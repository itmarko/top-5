package com.project.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.backend.Model.ExpertOpinion;
@Repository
public interface ExpertOpinionRepository extends JpaRepository<ExpertOpinion, Long> {

}
