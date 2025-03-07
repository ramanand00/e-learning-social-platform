import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    profilePicture: "",
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
  });
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = () => {
    // Add logic to submit form data to your backend
    // After successful registration, redirect to home page
    history.push("/home");
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <input
            type="file"
            name="profilePicture"
            onChange={handleInputChange}
          />
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleInputChange}
          />
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
          />
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 4 && (
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 5 && (
        <div>
          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
