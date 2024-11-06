import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import axios from "axios";

const MoreDetails = ({ prevStep, formData, setFormData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: formData,
  });

  const onSubmit = async (data) => {
    const finalData = { ...formData, ...data };

    if (!finalData.business || !finalData.address) {
      console.log(finalData);
      alert("Business and Address fields are required.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/business-info/add",
        finalData
      );
      console.log("Form Submitted", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-lg font-bold">Additional Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          {...register("businessLicense")}
          placeholder="Business License"
          className="border p-2 w-full"
        />
        <input
          {...register("taxID")}
          placeholder="Tax ID"
          className="border p-2 w-full"
        />
        <textarea
          {...register("additionalInfo")}
          placeholder="Any other information"
          className="border p-2 w-full"
          rows="4"
        />
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-500 text-white p-2 rounded"
        >
          Previous
        </button>
        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          Submit
        </button>
      </div>
    </form>
  );
};

MoreDetails.propTypes = {
  prevStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default MoreDetails;
