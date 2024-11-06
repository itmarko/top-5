import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

const Objective = ({ nextStep, prevStep, formData, setFormData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-lg font-bold">Your Objective</h2>
      <div className="grid grid-cols-1 gap-4">
        <textarea
          {...register('objective')}
          placeholder="What is your objective?"
          className="border p-2 w-full h-24 md:h-32 resize-none"
        />
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={prevStep} className="bg-gray-500 text-white p-2 rounded">
          Previous
        </button>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Next
        </button>
      </div>
    </form>
  );
};

Objective.propTypes = {
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default Objective;
