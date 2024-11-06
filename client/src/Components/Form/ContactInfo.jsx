import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const ContactInfo = ({ nextStep, prevStep, formData, setFormData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-4xl text-center font-bold">Contact Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("businessName")}
            placeholder="Business Name"
            className="border p-2 w-full rounded-md"
          />
        </div>
        <div>
          <label className="block mb-1">
            Your Relationship with the Business{" "}
            <span className="text-red-500">*</span>
          </label>
          <select
            {...register("relationshipType", { required: true })}
            className="border p-2 w-full rounded-md"
          >
            <option value="">Select Relationship Type</option>
            <option value="owner">Owner</option>
            <option value="manager">Manager</option>
            <option value="employee">Employee</option>
            <option value="partner">Partner</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">
            Business Phone <span className="text-red-500">*</span>
          </label>
          <input
            {...register("businessPhone")}
            placeholder="Business Phone"
            className="border p-2 w-full rounded-md"
          />
        </div>
        <div>
          <label className="block mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email")}
            placeholder="Email"
            className="border p-2 w-full rounded-md"
          />
        </div>
        <div>
          <label className="block mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            {...register("phone")}
            placeholder="Phone"
            className="border p-2 w-full rounded-md"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-500 text-white p-2 rounded"
        >
          Previous
        </button>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Next
        </button>
      </div>
    </form>
  );
};

ContactInfo.propTypes = {
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default ContactInfo;
