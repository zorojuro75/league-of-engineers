import React from "react";
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
      {/* <RegistrationProcess />
      <Payment />
      <div className="text-2xl font-semibold md:mx-auto">Player Registration fee 200tk</div>
      <RegButton>
        <Form />
      </RegButton> */}
      <div className="max-w-7xl md:mx-auto flex flex-col gap-y-5 justify-center items-center text-center text-3xl font-bold text-blue-gray-800 flex-1 mx-5">
        <div>Male Registration for League of Engineers is now closed. </div>
        <div>Thank you for your overwhelming response, and we look forward to an exciting tournament!</div>
        <div className="flex justify-center items-center gap-5">For Female Registraion:
        <RegButton>
          <Form/>
        </RegButton>
        </div>
        
      </div>
    </>
  );
};
export default Registration;
