package com.project.backend.DTO;

public class SocialMediaDTO {
	private Long id;
	private String platform;
	private String url;
	
	public SocialMediaDTO() {
	}

	public SocialMediaDTO(Long id, String platform, String url) {
		this.id = id;
		this.platform = platform;
		this.url = url;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPlatform() {
		return platform;
	}

	public void setPlatform(String platform) {
		this.platform = platform;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

}
