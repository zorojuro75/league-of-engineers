
import React from "react";
import Footer from "@/components/Footer";
import RegistrationProcess from "./components/RegistrationProcess";
import Payment from "./components/Payment";
import RegButton from "./components/RegButton";
import Form from "./components/Form";
const Registration = () => {
  const isBlurred = true;

  const toggleBlur = () => {
    const body = document?.querySelector("body"); // You can select the appropriate container
    body?.classList.toggle("blur", !isBlurred);
    
  };
  
  return (
    <>
      <RegistrationProcess />
      <Payment />
      <RegButton> <Form/> </RegButton>
      <Footer />
    </>
  );
};
export default Registration;
