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

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (North)",
  "Korea (South)",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "UAE",
  "UK",
  "USA",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const CityForm = ({ onAddCity }) => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("India");
  const [img, setImg] = useState(null);
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const fileSizeInKB = file.size / 1024;

      // Check if the file size is between 10KB and 1MB (1024KB)
      if (fileSizeInKB < 10 || fileSizeInKB > 1024) {
        setErrorMessage("File size must be between 10KB and 1MB.");
        setImg(null);
        setImage(null);
        fileInputRef.current.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setErrorMessage("");
    setSuccessMessage("");

    // Capitalize the first letter of city, state, and country
    const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
    const capitalizedState = state.charAt(0).toUpperCase() + state.slice(1);
    const capitalizedCountry =
      country.charAt(0).toUpperCase() + country.slice(1);

    // Validate form data
    if (
      !capitalizedCity.trim() ||
      !capitalizedState.trim() ||
      !capitalizedCountry.trim()
    ) {
      setErrorMessage("Please fill in all required fields.");
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("city", capitalizedCity);
    formData.append("state", capitalizedState);
    formData.append("country", capitalizedCountry);
    if (image) formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/locations",
        formData,
        { withCredentials: true }
      );

      // console.log("Response from server:", response); // Log the response

      // Check for successful response status
      if (response.status === 201 || response.status === 200) {
        setSuccessMessage("City added successfully!");
        setCity("");
        setState("");
        setCountry("India");
        setImg(null);
        setImage(null);
        fileInputRef.current.value = "";
        onAddCity(response.data);
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
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl mb-4">Add a New City</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
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
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="p-2 border rounded w-full"
          required
        >
          <option value="" disabled>
            Select Country
          </option>
          {countries.map((countryName, index) => (
            <option key={index} value={countryName}>
              {countryName}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <input
          type="file"
          ref={fileInputRef}
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
          className="p-2 w-full"
        />
        {img && (
          <img
            src={img}
            alt="Preview"
            className="mt-2 w-32 h-32 object-cover"
          />
        )}
      </div>
      {isLoading ? (
        <p className="text-blue-500">Adding city...</p>
      ) : (
        <button
          type="submit"
          className="p-2 px-4 py-2 bg-blue-500 text-white rounded w-full"
        >
          Add City
        </button>
      )}
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      {successMessage && (
        <p className="text-green-500 mt-2">{successMessage}</p>
      )}
    </form>
  );
};

export default CityForm;
