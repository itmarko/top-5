import React from 'react';

// Sample card data
const cards = [
  {
    id: 1,
    title: "Looking for?",
    subtitle: "Interior Designers",
    buttonText: "Get Best Quotes",
    bgColor: "bg-blue-900",
    imageUrl: "https://www.topfivebestrated.com/images/doc.png", // Replace with actual image
  },
  {
    id: 2,
    title: "Top Best Food And Pizza In Your City",
    imageUrl: "https://www.topfivebestrated.com/images/doc.png", // Replace with actual image
  },
  {
    id: 3,
    title: "Top Best Doctors In Your City",
    imageUrl: "https://www.topfivebestrated.com/images/doc.png", // Replace with actual image
  },
  {
    id: 4,
    title: "Top Best Professional Services In Your City",
    imageUrl: "https://www.topfivebestrated.com/images/doc.png", // Replace with actual image
  },
  {
    id: 5,
    title: "Top Best Beauty (Salon) In Your City",
    imageUrl: "https://www.topfivebestrated.com/images/doc.png", // Replace with actual image
  },
];

const CardCarousel = () => {
  return (
    <div className="w-full px-5 py-10">
      <div className="flex space-x-5 overflow-x-scroll no-scrollbar">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative flex-shrink-0 w-72 h-96 rounded-lg shadow-lg overflow-hidden"
            style={{ backgroundImage: `url(${card.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-5">
              <h3 className="text-xl font-bold text-white">{card.title}</h3>
              {card.subtitle && (
                <h4 className="text-2xl font-bold mt-2 text-white">
                  {card.subtitle}
                </h4>
              )}
              {card.buttonText && (
                <button
                  className="mt-4 px-4 py-2 rounded-md bg-yellow-400 hover:bg-yellow-500 transition duration-300"
                >
                  {card.buttonText}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
