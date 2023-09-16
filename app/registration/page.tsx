import React from "react";
import Footer from "@/components/Footer";
import Form from "./components/Form";
import RegistrationProcess from "./components/RegistrationProcess";
import Payment from "./components/Payment";
const Registration = () => {
  return (
    <>
      <RegistrationProcess />
      <Payment />
      <Form />
      <Footer className="sticky bottom-0" />
    </>
  );
};
export default Registration;
