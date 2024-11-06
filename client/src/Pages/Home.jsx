import { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import WeCanHelp from "./WeCanHelp";
import About from "./About";
import Resources from "./Research";
import img from "../assets/img-01.jpeg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [cities, setCities] = useState([]);

  // Fetch cities data from backend API using Axios
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/cities", {
          withCredentials: true, // Include cookies if needed (for authentication)
        });
        setCities(response.data); // Set the fetched cities data
        console.log("Fetched cities:", response.data); // Log fetched data to check
      } catch (error) {
        if (error.response) {
          console.error("Error fetching city data:", error.response.data); // Log response error details
        } else {
          console.error("Error fetching city data:", error.message); // Log error message if no response
        }
      }
    };

    fetchCities();
  }, []);

  return (
    <>
      <section
        className="bg-cover bg-center relative"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
          {/* Hero Text */}
          <h1 className="text-xl md:text-4xl font-bold text-white mb-8 mt-16">
            Behind every business listing there is an experience that matters
          </h1>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl bg-white p-2 rounded-lg shadow-lg mb-8 mt-6">
            <input
              type="text"
              placeholder="Search City"
              className="w-full md:w-1/2 p-2 border outline-none rounded-md"
            />
            <input
              type="text"
              placeholder="Search Category"
              className="w-full md:w-1/3 p-2 border-t md:border-t-0 md:border-l border-gray-300 rounded-r-md outline-none"
            />
            <button className="bg-gray-900 text-white p-2 md:px-6 rounded-md mt-4 md:mt-0">
              Search now
            </button>
          </div>

          {/* Trust Message */}
          <p className="text-2xl font-bold text-yellow-400 mb-4">
            Trust us we have found the best for you!
          </p>

          {/* City Grid */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-white max-w-6xl mb-6">
            {cities.map((city, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={`data:image/jpeg;base64,${city.image}`} // Assuming the image is stored as base64 in your DB
                  alt={city.name}
                  className="rounded-lg shadow-xl h-24 w-44 md:h-52 md:w-44 object-cover"
                />
                <p className="mt-2">{city.name}</p>
              </div>
            ))}
            <div className="flex flex-col items-center bg-blue-600 h-24 w-24 md:h-52 md:w-44 rounded-lg shadow-xl">
              <p className="text-white mt-16">Explore more city</p>
              <Link to="/explore-city">
                <button className="bg-yellow-400 text-black mt-2 px-4 py-2 rounded">
                  Explore all
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-4">
        <About />
        <Resources />
        <WeCanHelp />
      </div>
    </>
  );
};

export default HeroSection;
