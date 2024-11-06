package com.project.backend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.backend.DTO.FeedbackDTO;
import com.project.backend.Model.BusinessInfo;
import com.project.backend.Model.Feedback;
import com.project.backend.Repository.BusinessInfoRepository;
import com.project.backend.Repository.FeedbackRepository;

@Service
public class FeedbackService {

	@Autowired
	private FeedbackRepository feedbackRepository;

	@Autowired
	private BusinessInfoRepository businessInfoRepository;

	
	public Feedback saveFeedback(Long businessId, FeedbackDTO feedbackDTO) {
		Optional<BusinessInfo> businessInfoOptional = businessInfoRepository.findById(businessId);
		if (businessInfoOptional.isPresent()) {
			BusinessInfo businessInfo = businessInfoOptional.get();
			Feedback feedback = new Feedback();
			feedback.setName(feedbackDTO.getName());
			feedback.setDescription(feedbackDTO.getDescription());
			feedback.setRating(feedbackDTO.getRating());
			feedback.setBusinessInfo(businessInfo); 
			return feedbackRepository.save(feedback);
		}
		return null; 
	}

	
	public List<Feedback> getFeedbacksByBusinessId(Long businessId) {
		return feedbackRepository.findByBusinessInfoId(businessId);
	}

	public List<Feedback> getAllFeedbacks() {
		return feedbackRepository.findAll();
	}

	
	public Optional<Feedback> getFeedbackById(Long id) {
		return feedbackRepository.findById(id);
	}

	

	
}
