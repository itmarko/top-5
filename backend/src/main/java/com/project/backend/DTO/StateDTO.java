package com.project.backend.DTO;

import com.project.backend.Model.State;

public class StateDTO {
	private Long id;
	private String state;

	
	public StateDTO() {
	}

	public StateDTO(Long id, String state) {
		this.id = id;
		this.state = state;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}
	// Utility method to convert State entity to StateDTO
    public static StateDTO fromEntity(State state) {
        if (state == null) {
            return null; // Avoid NullPointerException if entity is null
        }
        return new StateDTO(state.getId(), state.getState());
    }
}
