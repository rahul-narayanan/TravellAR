import React, { useState, useCallback } from "react";
import App from "./js/App";
import Login from "./js/login";
import { Register } from "./js/register";

/* 
  Entry point of the app which navigates between login page and registration page
  Once signed in or signed up, this component displays the home page 
*/

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
