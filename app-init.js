import React, { useState, useCallback } from "react";
import App from "./js/App";
import Login from "./js/login";
import { Register } from "./js/register";

const TravellAR = () => {
  const [currentStep, setCurrentStep] = useState("login");

  const onSuccess = useCallback(() => {
    setCurrentStep("home");
  });

  const onLogin = useCallback(() => {
    setCurrentStep("login");
  });

  const onRegister = useCallback(() => {
    setCurrentStep("register");
  });

  if (currentStep === "login") {
    return <Login onRegister={onRegister} onSuccess={onSuccess} />;
  }

  if (currentStep === "register") {
    return <Register onLogin={onLogin} onSuccess={onSuccess} />;
  }

  return <App />;
};

export default TravellAR;
