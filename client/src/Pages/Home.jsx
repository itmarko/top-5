import { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import WeCanHelp from "./WeCanHelp";
import About from "./About";
import Resources from "./Research";
import img from "../assets/img-01.jpeg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [cities, setCities] = useState([]);
  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]; // Swap elements
    }
    return shuffledArray;
  };
  // Fetch cities data from backend API using Axios
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/cities");

        const randomCities = shuffleArray(response.data).slice(0, 11);
        setCities(randomCities);
        console.log("Fetched cities:", randomCities); // Log fetched data to check
      } catch (error) {
        if (error.response) {
          console.error("Error fetching city data:", error.response.data);
        } else {
          console.error("Error fetching city data:", error.message);
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
            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                placeholder="Search City"
                className="w-full p-2 pl-8 pr-10 border-none outline-none rounded-md"
              />
              <svg
                className="absolute right-0 top-1/2  transform -translate-y-1/2 h-6 w-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2.5 -2.5 24 24"
                width="28"
                fill="currentColor"
              >
                <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z"></path>
              </svg>
            </div>

            <div className="relative w-full md:w-1/3 mt-4 md:mt-0 md:ml-4">
              <input
                type="text"
                placeholder="Search Category"
                className="w-full p-2 pl-10 border-none outline-none rounded-md "
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-700 hover:bg-gradient-to-bl  focus:outline-none hover:from-purple-600 hover:to-blue-800  p-2 md:px-6 rounded-md mt-4 md:mt-0">
              Search now
            </button>
          </div>

          {/* Trust Message */}
          <p className="text-2xl font-bold text-yellow-400 mb-4">
            Trust us we have found the best for you!
          </p>

          {/* City Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 text-white max-w-6xl mx-auto mb-6">
            {cities.map((city, index) => (
              <Link
              to={`/local-businesses/${city.id}`}
              key={index}
              className="flex flex-col items-center group"
            >
              <div className="flex flex-col items-center">
                <img
                  src={`data:image/jpeg;base64,${city.image}`}
                  alt={city.city}
                  className="rounded-lg shadow-xl h-24 w-44 sm:h-28 sm:w-36 md:h-52 md:w-44 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <p className="mt-2 text-sm sm:text-lg md:text-xl font-bold group-hover:text-teal-500 group-hover:bg-teal-100 p-2 rounded transition-all duration-300 ease-in-out">
                  {city.city}
                </p>
              </div>
            </Link>
            
            ))}

            <div className="flex flex-col items-center bg-blue-600 h-24 w-44 sm:h-28 sm:w-36 md:h-52 md:w-44  rounded-lg shadow-xl">
              <p className="text-white mt-4 sm:mt-8 lg:mt-12 text-sm sm:text-lg">
                Explore more city
              </p>
              <Link to="/explore-city">
                <button className="bg-yellow-400 text-black mt-2 px-4 py-2 rounded text-xs sm:text-sm md:text-base">
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
