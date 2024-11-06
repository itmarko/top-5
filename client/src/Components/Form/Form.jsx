import { useState } from "react";
import BusinessInfo from "./Businessinfo";
import ContactInfo from "./ContactInfo";
import Objective from "./Objective";
import SocialLinks from "./SocialLinks";
import MoreDetails from "./MoreDetails";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [completedSteps, setCompletedSteps] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const nextStep = () => {
    if (step < completedSteps.length) {
      const newCompletedSteps = [...completedSteps];
      newCompletedSteps[step - 1] = true; // Mark the current step as completed
      setCompletedSteps(newCompletedSteps);
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    if (step > 1) {
      const newCompletedSteps = [...completedSteps];
      newCompletedSteps[step - 2] = false; // Mark the previous step as incomplete
      setCompletedSteps(newCompletedSteps);
    }
  };

  const steps = [
    <BusinessInfo
      key="businessInfo"
      nextStep={nextStep}
      formData={formData}
      setFormData={setFormData}
    />,
    <ContactInfo
      key="contactInfo"
      nextStep={nextStep}
      prevStep={prevStep}
      formData={formData}
      setFormData={setFormData}
    />,
    <Objective
      key="objective"
      nextStep={nextStep}
      prevStep={prevStep}
      formData={formData}
      setFormData={setFormData}
    />,
    <SocialLinks
      key="socialLinks"
      nextStep={nextStep}
      prevStep={prevStep}
      formData={formData}
      setFormData={setFormData}
    />,
    <MoreDetails
      key="moreDetails"
      prevStep={prevStep}
      formData={formData}
      setFormData={setFormData}
    />,
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-10">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white  shadow-2xl rounded-2xl mx-4 ">
        {/* Stepper */}
        <ol className="space-y-4 w-full md:w-1/3 bg-slate-100 p-6 rounded-2xl shadow-xl">
          {[
            "Business info",
            "Contact info",
            "Your Objective",
            "Social accounts",
            "Additional info",
            "Review",
            "Confirmation",
          ].map((label, index) => {
            const isCompleted = completedSteps[index];
            const isCurrent = step === index + 1;

            return (
              <li key={index}>
                <div
                  className={`w-full p-4 mt-4 ${
                    isCompleted && !isCurrent
                      ? "text-green-700 border-green-300 bg-green-50"
                      : isCurrent
                      ? "text-blue-700 border border-blue-800 bg-blue-100"
                      : "text-gray-900 bg-gray-100 border-gray-300"
                  } border rounded-lg transition duration-300`}
                  role="alert"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{`${index + 1}. ${label}`}</h3>
                    {isCompleted && !isCurrent ? (
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5.917 5.724 10.5 15 1.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="rtl:rotate-180 w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Render Current Step */}
        <div className="w-full sm:w-2/3 p-4">{steps[step - 1]}</div>
      </div>
    </div>
  );
};

export default App;
