import { FaShareAlt, FaPen } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="flex items-center justify-center bg-gray-300 py-10 px-4">
      <div className="w-full max-w-4xl md:max-w-fit rounded-3xl shadow-2xl overflow-hidden bg-white">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-1/4 bg-gray-100 flex flex-col items-center rounded-lg">
            <img
              className="h-48 w-48 sm:h-72 sm:w-96 rounded-tl-2xl object-cover"
              src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww"
              alt="Doctor"
            />

            <div className="w-full px-2 bg-gradient-to-r from-blue-600 to-purple-600 sm:rounded-bl-2xl ">
              <div className="p-10 space-y-3 w-full px-5">
                {[
                  "Show Number",
                  "Send Message",
                  "Visit Website",
                  "Get Directions",
                ].map((label) => (
                  <button
                    key={label}
                    className="bg-orange-500 text-white py-2 px-6 rounded-3xl w-full
                    hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-600
                    "
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/4 lg:pl-0 mt-10 lg:mt-10 lg:ml-10 ml-10">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">
              Dr. Sachin Jindal
            </h1>
            <p className="text-sm sm:text-base text-green-500 mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.1 2 5 5.1 5 9c0 4.1 7 11 7 11s7-6.9 7-11c0-3.9-3.1-7-7-7zm0 9a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
              Plot No 42, Manali House, Jail Rd, Manali House, Sector 1, Ambala,
              Haryana 134003
            </p>

            <div className="flex flex-wrap mb-6">
              {[
                "Lung Cancer",
                "Tuberculosis",
                "Shortness of breath",
                "Chest Pain",
                "Pneumonia",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-500 text-xs sm:text-sm px-3 py-1 rounded-full mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-t pt-6 text-sm sm:text-base">
              <div className="flex flex-col justify-center">
                <h3 className="font-semibold mb-3 text-xl">Reputation</h3>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="flex flex-col">
                    <p className="font-semibold">Google:</p>
                    <p className="font-semibold">Facebook:</p>
                    <p className="font-semibold">Top Five Best:</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">4.9 / 5</p>
                    <p className="font-semibold">4.9 / 5</p>
                    <p className="font-semibold">4 / 5</p>
                  </div>
                </div>
                <button className="mt-4 text-blue-500 flex items-center">
                  <FaPen className="mr-1" /> Leave Feedback
                </button>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-xl">Professionalism</h3>
                <div className="mt-2">
                  <p>
                    Work Ethics:{" "}
                    <span className="font-semibold ">Excellent</span>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-xl">Price</h3>
                <div className="mt-2">
                  <p>Request a Quote</p>
                  <p>Schedule a Free Consultation</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t mt-6">
              <h3 className="font-semibold">Expert Opinion</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Dr. Sachin Jindal is the Director of Narain Hospital and CT Scan
                Center situated in Ambala city... 
              </p>
            </div>
            <div className="flex justify-end p-6">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center">
                <FaShareAlt className="mr-1" /> Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
