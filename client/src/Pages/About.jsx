const OurSelectionProcess = () => {
  return (
    <section className="bg-white p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Our Selection Process
      </h2>
      <p className="text-lg mb-6 text-center">
        At topfivebestrated.com, we research and evaluate service experts in
        100+ industries. With over 30,000 businesses reviewed, we help you find
        the most qualified professionals for your needs. Trust our evolving
        research process for reliable endorsements you can rely on.
      </p>

      {/* Grid for steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Step 1 */}
        <div className="flex flex-col items-center ">
          <div className="relative w-40 h-40 rounded-full bg-gray-100">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src="https://www.topfivebestrated.com/images/fig-1.webp"
                alt="Identify"
                className="w-16 h-16"
              />
            </div>
            <div className="absolute -top-0 ">
              <div className="w-12 h-12 rounded-full bg-gradient-to-b from-purple-300 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                01
              </div>
            </div>
          </div>
          <h3 className="mt-4 text-xl font-bold text-gray-700">Identify</h3>
          <p className=" text-gray-950 text-center mt-3">
            By leveraging public databases and customer referrals, we compile a
            comprehensive directory of local businesses.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center ">
          <div className="relative w-40 h-40 rounded-full bg-gray-100">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src="https://www.topfivebestrated.com/images/fig-1.webp"
                alt="Identify"
                className="w-16 h-16"
              />
            </div>
            <div className="absolute -top-0 ">
              <div className="w-12 h-12 rounded-full bg-gradient-to-b from-cyan-400 to-cyan-600 flex items-center justify-center text-white font-bold text-sm">
                02
              </div>
            </div>
          </div>
          <h3 className="mt-4 text-xl font-bold  text-gray-700">Analyze</h3>
          <p className="text-gray-950 text-center mt-3">
            Using proprietary algorithms, we meticulously analyse the online
            presence of providers by scouring public records and information.
            This enables us to determine their reputation and ensure the highest
            quality standards.
          </p>
        </div>
        {/* Step 3 */}
        <div className="flex flex-col items-center ">
          <div className="relative w-40 h-40 rounded-full bg-gray-100">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src="https://www.topfivebestrated.com/images/fig-1.webp"
                alt="Identify"
                className="w-16 h-16"
              />
            </div>
            <div className="absolute -top-0 ">
              <div className="w-12 h-12 rounded-full bg-gradient-to-b from-red-300  to-sky-400 flex items-center justify-center text-white font-bold text-sm">
                03
              </div>
            </div>
          </div>
          <h3 className="mt-4 text-xl font-bold text-gray-700">Verify</h3>
          <p className="text-gray-950 text-center mt-3">
            Our dedicated research team verifies business qualifications,
            including accreditations, certifications, and licences, to ensure
            their legitimacy and adherence to industry standards.
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center ">
          <div className="relative w-40 h-40 rounded-full bg-gray-100">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src="https://www.topfivebestrated.com/images/fig-1.webp"
                alt="Identify"
                className="w-16 h-16"
              />
            </div>
            <div className="absolute -top-0 ">
              <div className="w-12 h-12 rounded-full bg-gradient-to-b from-red-300 to-red-600 flex items-center justify-center text-white font-bold text-sm">
                04
              </div>
            </div>
          </div>
          <h3 className="mt-4 text-xl font-bold text-gray-700">
            Screen / Mystery Shop
          </h3>
          <p className="text-gray-950 text-center mt-3">
            We evaluate finalists based on expertise, services ordered and
            thorough background checks. Sometimes our mystery teams conduct
            phone evaluations with each company as the final step in our
            process.
          </p>
        </div>

        {/* Step 5 */}
        <div className="flex flex-col items-center ">
          <div className="relative w-40 h-40 rounded-full bg-gray-100">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src="https://www.topfivebestrated.com/images/fig-1.webp"
                alt="Identify"
                className="w-16 h-16"
              />
            </div>
            <div className="absolute -top-0 ">
              <div className="w-12 h-12 rounded-full bg-gradient-to-b from-red-300 to-green-500 flex items-center justify-center text-white font-bold text-sm">
                05
              </div>
            </div>
          </div>
          <h3 className="mt-4 text-xl font-bold text-gray-700">
            List Business
          </h3>
          <p className="text-gray-950 text-center mt-3">
            Once we've conducted a thorough screening process and determined
            that your business aligns with our specific selection criteria, we
            will proceed to list your business for a duration of 3 months.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurSelectionProcess;
