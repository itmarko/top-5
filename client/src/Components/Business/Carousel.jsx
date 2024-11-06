import { useState } from 'react';

const carouselItems = [
  {
    id: 1,
    title: "Search, compare prices & book hotels",
    buttonText: "GET BEST DEALS",
    imageUrl: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_bills.png", // Replace with the actual image URL
    altText: "Hotel Room",
  },
  {
    id: 2,
    title: "Search, compare prices & book hotels",
    buttonText: "GET BEST DEALS",
    imageUrl: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_packersmovers.png?v=1.1", // Replace with the actual image URL
    altText: "Packers and Movers",
  },
  // Add more slides as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-5xl h-[300px] mx-auto rounded-3xl overflow-hidden mt-10">
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={item.imageUrl}
            alt={item.altText}
            className="w-full h-[300px] sm:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/70 to-transparent flex items-center">
            <div className="ml-5 sm:ml-10 space-y-3">
              <h2 className="text-2xl sm:text-4xl font-bold text-white text-center sm:text-left">{item.title}</h2>
              <button className="px-4 py-2 text-white bg-white/50 rounded-lg hover:bg-white/70 transition duration-300">
                {item.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-900 font-bold text-xl p-2"
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-900 font-bold text-xl p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
