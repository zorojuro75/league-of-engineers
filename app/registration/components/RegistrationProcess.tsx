import { Ultra } from "next/font/google";
import React from "react";

const RegistrationProcess = () => {
  return (
    <>
    <h1 className="text-center text-4xl font-bold my-[20px]">Read Before You Register</h1>
    <div className="container text-xl md:mx-[100px] px-[20px] my-[10px]">
      <p>1. Make payment as per instructions.</p>
      <p>2. Fill out the registration form with the following details:</p>
      <ul className="ps-[20px]">
        
        <li>- Full Name </li>
         <li>- IUB ID </li>
        <li>- Department (must be from SETS) </li>
         <li>- Email address </li>
        <li>- Tournament name you played before </li>
        <li>
          - Preferable position you want to play(subject to change if required)
        </li>
        <li>- Upload your image </li>
        <li>
          - Transaction ID(TRX ID) or reference number from your payment
          transaction. For agent-assisted mobile payments (bKash or Nagad), do not forget to give the reference and obtain the TRX ID.
        </li>
        <li>- Double-check all information for accuracy.</li>
      </ul>
      <p>3. Click the Submit Button.</p>
      </div>
    </>
  );
};

export default RegistrationProcess;
