import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
];

const BusinessInfo = ({ nextStep, formData, setFormData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: formData,
  });

  // const onSubmit = (data) => {
  //   setFormData({ ...formData, ...data });
  //   nextStep();
  // };

  const [state, setState] = useState("");

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setState(selectedState);
  };

  const onSubmit = (data) => {
    const transformedData = {
      businessInfoId: null, // auto-generated
      businessName: data.businessName,
      businessNumber: data.businessPhone,
      businessWhatsapp: null, // set as needed
      website: data.businessWebsite,
      businessImage: null, // base64 encoded string if needed
      specializations: [data.businessSubCategory], // Adjust based on your requirements
      business: {
        businessId: null, // auto-generated
        businessname: data.businessName,
        city: {
          cityId: null, // auto-generated or fetched, set as needed
          cityname: data.businessCity,
          state: {
            stateId: null, // auto-generated or fetched, set as needed
            state: state,
            country: {
              countryId: 1, // Hardcoded for India, adjust as needed
              country: "India",
            },
          },
        },
        businessType: {
          businessTypeId: null, // auto-generated or fetched, set as needed
          businessTypes: data.businessCategory,
          category: "Food & Beverage", // Adjust as necessary
          description: "Providing food and drink services", // Adjust as necessary
        },
        addresses: [
          {
            addressId: null, // auto-generated
            country: {
              countryId: 1, // Hardcoded for India, adjust as needed
              country: "India",
            },
            state: {
              stateId: null, // auto-generated
              state: state,
            },
            city: {
              cityId: null, // auto-generated or fetched, set as needed
              cityname: data.businessCity,
            },
            district: "Mumbai Suburban", // Adjust based on your needs
            block: null, // Set as needed
            street: data.address, // Ensure you collect the address in the form
            zipCode: data.postalCode, // Ensure you collect the postal code in the form
            addressType: "Business", // Adjust as necessary
            notes: "", // Set as needed
          },
        ],
      },
      expertOpinions: [], // Add as needed
      feedbacks: [], // Add as needed
    };
    setFormData({ ...formData, ...transformedData });
    nextStep();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-lg mx-auto p-2"
    >
      <h2 className="text-4xl font-bold text-center mt-[-5px]">
        Tell us about your business
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">
            Business Name <span className="text-red-500">*</span>
          </label>

          <input
            {...register("businessName", { required: true })}
            placeholder="Business Name"
            className="border p-2 w-full h-10 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1">
            WhatsApp Business Phone <span className="text-red-500">*</span>
          </label>
          <input
            {...register("businessPhone", { required: true })}
            placeholder="WhatsApp Business Phone"
            maxLength={13}
            className="border p-2 w-full h-10 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1">
            Services Provided <span className="text-red-500">*</span>
          </label>
          <input
            {...register("servicesProvided", { required: true })}
            placeholder="Services Provided"
            className="border p-2 w-full h-10 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1">Business Website</label>
          <input
            {...register("businessWebsite")}
            placeholder="Business Website"
            className="border p-2 w-full h-10 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1">
            Business Category <span className="text-red-500">*</span>
          </label>
          <select
            {...register("businessCategory", { required: true })}
            className="border p-2 w-full h-10 rounded-md"
          >
            <option value="">Select Business Category</option>
            <option value="cafe">Cafe</option>
            {/* Add more options */}
          </select>
        </div>

        <div>
          <label className="block mb-1">
            Business Sub Category <span className="text-red-500">*</span>
          </label>
          <select
            {...register("businessSubCategory", { required: true })}
            className="border p-2 w-full h-10 rounded-md"
          >
            <option value="">Select Business Sub Category</option>
            <option value="chai">Chai</option>
            {/* Add more options */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1">
            Business State <span className="text-red-500">*</span>
          </label>
          <select
            value={state}
            onChange={handleStateChange}
            className="p-2 border rounded w-full h-10"
            required
          >
            <option value="" disabled>
              Select State
            </option>
            {indianStates.map((stateName, index) => (
              <option key={index} value={stateName}>
                {stateName}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">
            Business City <span className="text-red-500">*</span>
          </label>
          <input
            {...register("businessCity", { required: true })}
            placeholder="Busines City"
            className="border p-2 w-full h-10 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1">
            Working Hours <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-4 mb-2">
            <span>From</span>
            <input
              {...register("workingHoursFrom", { required: true })}
              type="time"
              className="border p-2 w-full h-10 rounded-md"
            />
            <span>To</span>
            <input
              {...register("workingHoursTo", { required: true })}
              type="time"
              className="border p-2 w-full h-10 rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="mt-0">
        <label className="block mb-1">
          Working Days <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-4 gap-2">
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day) => (
            <label key={day} className="flex items-center">
              <input
                type="checkbox"
                {...register("workingDays", { required: false })}
                value={day}
                className="mr-2"
              />
              {day}
            </label>
          ))}
        </div>
      </div>

      {/* Button outside the grid */}
      <div className="text-center mt-6">
        <button
          type="submit"
          className="bg-yellow-500 text-white font-bold text-2xl p-2 px-10 rounded-full w-full max-w-xs mx-auto"
        >
          Let&apos;s get Started
        </button>
      </div>
    </form>
  );
};

BusinessInfo.propTypes = {
  nextStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default BusinessInfo;
