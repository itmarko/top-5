import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-700 p-4 relative">
      <div className="container mx-auto  flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <div>
            <h1 className="text-2xl md:text-3xl text-orange-500 font-bold">
              TOP FIVE BEST <span className="text-blue-500">RATED</span>
            </h1>
            <p className="text-sm md:text-base text-gray-300">BEST, not anyone</p>
          </div>
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="md:hidden text-white"
          onClick={toggleDrawer}
          aria-label={isDrawerOpen ? "Close Menu" : "Open Menu"}
        >
          {isDrawerOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        
        {/* Navigation Links for Large Screens */}
        <nav className="hidden md:flex space-x-8 text-white">
          <Link
            to="/list-business"
            className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500"
          >
            List Business
          </Link>
          <a href="#" className="hover:underline">
            Find Business
          </a>
          <a href="#" className="hover:underline">
            FAQ
          </a>
          <Link to="/log-in" className="hover:underline">
            Login
          </Link>
        </nav>
      </div>

      {/* Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-auto bg-slate-100 shadow-lg rounded-2xl transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleDrawer} className="text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link
            to="/"
            className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500"
          >
            List Business
          </Link>
          <a href="#" className="hover:underline">
            Find Business
          </a>
          <a href="#" className="hover:underline">
            FAQ
          </a>
          <Link to="/log-in" className="hover:underline">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
