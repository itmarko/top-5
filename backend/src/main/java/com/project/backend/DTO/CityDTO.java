	package com.project.backend.DTO;
	
	import java.util.Base64;
	
	import com.project.backend.Model.City;
	import com.project.backend.Model.State;
	
	public class CityDTO {
	    private Long id;
	    private String city;
	    private String image; 
	
	    public CityDTO() {
		}
	
		public CityDTO(Long id, String city, String image) {
			this.id = id;
			this.city = city;
			this.image = image;
		}
	
		public Long getId() {
	        return id;
	    }
	
	    public void setId(Long id) {
	        this.id = id;
	    }
	
	    public String getCity() {
	        return city;
	    }
	
	    public void setCity(String city) {
	        this.city = city;
	    }
	
	    public String getImage() {
	        return image;
	    }
	
	    public void setImage(String image) {
	        this.image = image;
	    }
	
	    // Utility methods for conversion
	    public static CityDTO fromEntity(City city) {
	        CityDTO cityDTO = new CityDTO();
	        cityDTO.setId(city.getId());
	        cityDTO.setCity(city.getCity());
	        
	        // Convert byte[] to Base64 String
	        if (city.getImage() != null) {
	            String base64Image = Base64.getEncoder().encodeToString(city.getImage());
	            cityDTO.setImage(base64Image);
	        }
	        
	        return cityDTO;
	    }
	
	    public static City toEntity(CityDTO cityDTO, State state) {
	        City city = new City();
	        city.setId(cityDTO.getId());
	        city.setCity(cityDTO.getCity());
	        city.setState(state);
	
	        // Convert Base64 String to byte[]
	        if (cityDTO.getImage() != null) {
	            byte[] imageBytes = Base64.getDecoder().decode(cityDTO.getImage());
	            city.setImage(imageBytes);
	        }
	
	        return city;
	    }
	}
