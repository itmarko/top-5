import { useState, useEffect, useRef } from "react";
import axios from "axios";
const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
];

const CityForm = ({ onAddCity }) => {
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [img, setImg] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef(null); // Reference to the file input

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const fileSizeInKB = file.size / 1024;

      // Check if the file size is between 10KB and 1MB (1024KB)
      if (fileSizeInKB < 10 || fileSizeInKB > 1024) {
        setErrorMessage("File size must be between 10KB and 1MB.");
        setImg(null); // Clear any previous image preview
        setImageFile(null);
        fileInputRef.current.value = ""; // Clear file input
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Clear previous messages
    setErrorMessage("");
    setSuccessMessage("");

    // Validate the city name and state
    if (name.trim() === "") {
      setErrorMessage("Please enter a city name.");
      setIsLoading(false);
      return;
    }
    if (state.trim() === "") {
      setErrorMessage("Please enter a state.");
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("state", state);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/cities/add-city", 
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true, 
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage("City added successfully!");
        setName("");
        setState("");
        setImg(null);
        setImageFile(null);
        fileInputRef.current.value = ""; // Reset the file input field
        onAddCity(response.data); // Optionally call a function to update the city list
      } else {
        setErrorMessage(response.data?.message || "Failed to add city.");
      }
    } catch (error) {
      error.response?.data?.message;
      setErrorMessage(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000); // 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [successMessage]);

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl mb-4">Add a New City</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="City Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="p-2 border rounded w-full"
          required
        >
          <option value="" disabled>
            Select State
          </option>
          {indianStates.map((stateName, index) => (
            <option key={index} value={stateName}>
              {stateName}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="p-2 border rounded w-full"
          ref={fileInputRef} // Assign the ref to the file input
          required
        />
      </div>
      {img && (
        <div className="mb-4">
          <img
            src={img}
            alt="Preview"
            className="h-24 w-24 object-cover rounded"
          />
        </div>
      )}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={isLoading}
      >
        {isLoading ? "Adding City..." : "Add City"}
      </button>
      {successMessage && (
        <div className="mt-4 text-green-500">{successMessage}</div>
      )}
      {errorMessage && <div className="mt-4 text-red-500">{errorMessage}</div>}
    </form>
  );
};

export default CityForm;
