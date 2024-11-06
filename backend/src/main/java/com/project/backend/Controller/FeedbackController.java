package com.project.backend.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.backend.DTO.FeedbackDTO;
import com.project.backend.Model.Feedback;
import com.project.backend.Service.FeedbackService;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {

	@Autowired
	private FeedbackService feedbackService;

	@PostMapping("/save/{businessId}")
	public ResponseEntity<Feedback> saveFeedback(@PathVariable Long businessId, @RequestBody FeedbackDTO feedbackDTO) {
		Feedback savedFeedback = feedbackService.saveFeedback(businessId, feedbackDTO);
		return savedFeedback != null ? ResponseEntity.ok(savedFeedback) : ResponseEntity.notFound().build();
	}

	@GetMapping("/business/{businessId}")
	public List<Feedback> getFeedbacksByBusinessId(@PathVariable Long businessId) {
		return feedbackService.getFeedbacksByBusinessId(businessId);
	}

	@GetMapping("/all")
	public List<Feedback> getAllFeedbacks() {
		return feedbackService.getAllFeedbacks();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Feedback> getFeedbackById(@PathVariable Long id) {
		Optional<Feedback> feedback = feedbackService.getFeedbackById(id);
		return feedback.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
	}

//    @PutMapping("/update/{id}")
//    public ResponseEntity<Feedback> updateFeedback(@PathVariable Long id, @RequestBody FeedbackDTO feedbackDTO) {
//        Feedback updatedFeedback = feedbackService.updateFeedback(id, feedbackDTO);
//        return updatedFeedback != null ? ResponseEntity.ok(updatedFeedback) : ResponseEntity.notFound().build();
//    }
//
//    // Delete feedback by ID
//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<Void> deleteFeedback(@PathVariable Long id) {
//        boolean isDeleted = feedbackService.deleteFeedback(id);
//        return isDeleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
//    }
}
