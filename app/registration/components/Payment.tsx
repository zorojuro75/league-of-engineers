import React from "react";

const Payment = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold my-[20px]">
        Payment Method
      </h1>
      <div className="container text-xl md:mx-[100px] px-[20px] my-[10px]">
        <p>
          Registration Procedure for League of SETS Season 2, including
          Payment Options for bKash, Nagad:
        </p>
        <p>Follow these steps for a smooth registration process:</p>
        <p className="text-2xl font-semibold py-5">Payment Options:</p>
        <p>A. bKash:</p>
        <ul className="ps-[20px]">
          <li>- Account Type: Personal</li>
          <li>- Account Number: 01715069921</li>
        </ul>
        <p>B. Nagad:</p>
        <ul className="ps-[20px]">
          <li>- Account Type: Personal</li>
          <li>- Account Number: 01715069921</li>
        </ul>
        <p className="text-2xl font-semibold py-5">Payment Process (bKash, Nagad):</p>

        <p>
          1. Open the respective mobile app or dial the appropriate code to
          access your mobile menu.
        </p>
        <ul className="ps-[20px]">
          <li>- For bKash, use the bKash app or dial *247#.</li>
          <li>- For Nagad, use the Nagad app or dial *167#.</li>
        </ul>
        <p>2. Select &apos;Send  Money.&apos;</p>

        <p>
          3. Enter the provided account number based on your chosen payment
          method:
        </p>
        <ul className="ps-[20px]">
          <li>
            - For bKash or Nagad use the provided Account Number.
          </li>
        </ul>
        <p>4. Input the exact bill amount(200tk).</p>
        <p>
          5. Enter your IUB ID as reference.
        </p>
        <p>6. Confirm the transaction by entering your mobile menu PIN:</p>
        <ul className="ps-[20px]">
          <li>- For bKash, use your bKash Mobile Menu PIN.</li>
          <li>- For Nagad, use your Nagad Mobile Menu PIN.</li>
        </ul>
        <p>
          7. After successfully sending the money, you&apos;ll receive a
          Transaction ID (TRX ID) or reference number. Please make a note of
          this Transaction ID or reference number.
        </p>
      </div>
    </>
  );
};

export default Payment;
