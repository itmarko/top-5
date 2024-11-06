const categories = [
  {
    title: "Food & Dining",
    services: [
      { name: "Restaurants", icon: "🍽️" },
      { name: "Food Delivery", icon: "📦" },
      { name: "Cafes", icon: "☕" },
      { name: "Bakeries", icon: "🍰" },
      { name: "Food Trucks", icon: "🚚" },
      { name: "Catering Services", icon: "🥡" },
      { name: "Bars & Pubs", icon: "🍻" },
      { name: "Grocery Stores", icon: "🛒" },
      { name: "Meal Delivery", icon: "📦" },
      { name: "Ethnic Cuisine", icon: "🌍" },
      { name: "Dessert Shops", icon: "🍦" },
    ],
  },
  {
    title: "Home Services",
    services: [
      { name: "Packers & Movers", icon: "🚚" },
      { name: "Cleaning Services", icon: "🧹" },
      { name: "Gardening", icon: "🌱" },
      { name: "Plumbing", icon: "🚰" },
      { name: "Electrical Services", icon: "💡" },
      { name: "Painting", icon: "🎨" },
      { name: "Pest Control", icon: "🐜" },
      { name: "Home Renovation", icon: "🔨" },
      { name: "HVAC Services", icon: "❄️" },
      { name: "Handyman Services", icon: "🛠️" },
    ],
  },
  {
    title: "Local Businesses",
    services: [
      { name: "Old age homes", icon: "🏠" },
      { name: "Shopping", icon: "🛍️" },
      { name: "Clothing stores", icon: "👗" },
      { name: "Restaurants", icon: "🍽️" },
      { name: "Cafes", icon: "☕" },
      { name: "Grocery Stores", icon: "🛒" },
      { name: "Retail Shops", icon: "🛍️" },
      { name: "Salons & Spas", icon: "💇" },
      { name: "Fitness Centers", icon: "🏋️" },
      { name: "Pet Services", icon: "🐶" },
      { name: "Automotive Services", icon: "🚗" },
      { name: "Home Improvement", icon: "🔧" },
      { name: "Entertainment Venues", icon: "🎭" },
    ],
  },
  {
    title: "Tours & Travels",
    services: [
      { name: "Visa Consultants", icon: "🛂" },
      { name: "Travel Agencies", icon: "✈️" },
      { name: "Tour Operators", icon: "🗺️" },
      { name: "Adventure Tours", icon: "🏞️" },
      { name: "Cultural Tours", icon: "🏛️" },
      { name: "Sightseeing Tours", icon: "👀" },
      { name: "Cruises", icon: "🚢" },
      { name: "Car Rentals", icon: "🚗" },
      { name: "Accommodation Services", icon: "🏨" },
      { name: "Travel Insurance", icon: "🛡️" },
      { name: "Visa Assistance", icon: "📄" },
    ],
  },
  {
    title: "Doctors",
    services: [
      { name: "Ayurvedic Clinics", icon: "🌿" },
      { name: "Cardiologists", icon: "❤️" },
      { name: "Dental clinics", icon: "🦷" },
      { name: "Dermatologist", icon: "🧴" },
      { name: "Diabetologist Doctors", icon: "🩸" },
      { name: "ENT doctors", icon: "👂" },
      { name: "Gastroenterologists", icon: "🥼" },
      { name: "General physician", icon: "🩺" },
      { name: "Gynaecologist doctors", icon: "👩‍⚕️" },
      { name: "Hair transplant surgeons", icon: "💇‍♂️" },
      { name: "Neurologist doctors", icon: "🧠" },
      { name: "Orthodontists", icon: "🦷" },
      { name: "Orthopaedic surgeons", icon: "🦴" },
      { name: "Pathologist doctors", icon: "🔬" },
      { name: "Plastic surgeons", icon: "👨‍⚕️" },
      { name: "Psychologist", icon: "🧠" },
    ],
  },
  {
    title: "Health & Fitness",
    services: [
      { name: "Dietitian and Nutritionist", icon: "🍎" },
      { name: "Gyms", icon: "🏋️" },
      { name: "Hospitals", icon: "🏥" },
      { name: "Salons", icon: "💇" },
      { name: "Personal Training", icon: "💪" },
      { name: "Yoga Studios", icon: "🧘" },
      { name: "Pilates", icon: "🤸" },
      { name: "Nutrition Counseling", icon: "🥗" },
      { name: "Massage Therapy", icon: "💆" },
      { name: "Physical Therapy", icon: "🏥" },
      { name: "Fitness Classes", icon: "🎉" },
      { name: "Health Clinics", icon: "🏥" },
      { name: "Wellness Programs", icon: "🌱" },
    ],
  },
  {
    title: "Professional Services",
    services: [
      { name: "Advertising Agencies", icon: "📢" },
      { name: "Astrologers", icon: "🔮" },
      { name: "Building architects", icon: "🏗️" },
      { name: "Chartered accountants", icon: "💼" },
      { name: "Corporate lawyers", icon: "⚖️" },
      { name: "Criminal case lawyers", icon: "⚖️" },
      { name: "Divorce lawyers", icon: "⚖️" },
      { name: "Dry Cleaners", icon: "🧼" },
      { name: "Graphic Designers", icon: "🎨" },
      { name: "Interior designers", icon: "🏡" },
      { name: "Photographers", icon: "📸" },
      { name: "Real estate agents", icon: "🏢" },
      { name: "Web designers", icon: "💻" },
    ],
  },
];

const ServiceCard = ({ service }) => (
  <div className="p-4 border border-gray-300 rounded-lg text-center ">
    <div className="text-4xl mb-3">{service.icon}</div>
    <h3 className="font-bold">{service.name}</h3>
  </div>
);

const App = () => (
  <div className="container mx-auto ">
    {categories.map((category) => (
      <div
        key={category.title}
        className="border border-gray-300 rounded-xl mt-10 p-5"
      >
        <h1 className="text-3xl font-bold mb-6 text-center ">
          {category.title}
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-10">
          {category.services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default App;
