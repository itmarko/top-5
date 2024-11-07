import { useState, useEffect } from "react";
import axios from "axios";

const AllCities = () => {
  const [stateGroups, setStateGroups] = useState({});

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/locations/cities",
          {
            withCredentials: true,
          }
        );

        // Group cities by state
        const groupedCities = response.data.reduce((groups, city) => {
          if (!groups[city.state]) {
            groups[city.state] = [];
          }
          groups[city.state].push(city);
          return groups;
        }, {});
        setStateGroups(groupedCities);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">All Cities</h1>

      {Object.keys(stateGroups).map((state) => (
        <div key={state} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">{state}</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {stateGroups[state].map((city, index) => (
              <div
                key={index}
                className="flex flex-col items-center shadow-4xl"
              >
                <img
                  src={`data:image/jpeg;base64,${city.image}`}
                  alt={city.city}
                  className="rounded-lg shadow-4xl h-32 w-32 md:h-40 md:w-40 lg:h-60 lg:w-60 object-cover"
                />
                <p className="mt-2 text-center">{city.city}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCities;
