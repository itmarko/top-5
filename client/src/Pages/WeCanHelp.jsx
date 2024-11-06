const WeCanHelp = () => {
    return (
      <section className="bg-gray-100 p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">We Can Help!</h2>
        <p className="text-lg mb-6">
          Whether you need custom recommendations or want to grow your business, our sales team is here to help!
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m0 4M8 13V9m0 4V15m0-6l-3-3m0 0 3-3m-3 3 3 3" />
            </svg>
            Schedule A Call
          </button>
          <a href="tel:+918699490011" className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h14z" />
            </svg>
            (+91)-8699490011
          </a>
        </div>
      </section>
    );
  };
  
  export default WeCanHelp;
  