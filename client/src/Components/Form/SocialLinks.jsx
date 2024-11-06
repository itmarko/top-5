import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

const SocialLinks = ({ nextStep, prevStep, formData, setFormData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-lg font-bold">Social Media Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          {...register('facebook')}
          placeholder="Facebook Profile"
          className="border p-2 w-full"
        />
        <input
          {...register('twitter')}
          placeholder="Twitter Profile"
          className="border p-2 w-full"
        />
        <input
          {...register('instagram')}
          placeholder="Instagram Profile"
          className="border p-2 w-full"
        />
        <input
          {...register('linkedin')}
          placeholder="LinkedIn Profile"
          className="border p-2 w-full"
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

SocialLinks.propTypes = {
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default SocialLinks;
