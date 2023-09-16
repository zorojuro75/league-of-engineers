import React from "react";

const Payment = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold my-[20px]">Payment Method</h1>
      <div className="container text-xl md:mx-[100px] px-[20px] my-[10px]">
        <p>
          Registration Procedure for League of Engineers Season 2, including
          Payment Options for bKash, Nagad, Rocket:
        </p>
        <p>Follow these steps for a smooth registration process:</p>
        <p>Payment Options:</p>
        <p>1. bKash:</p>
        <ul className="ps-[20px]">
          <li>- Account Type: Personal</li>
          <li>- Account Number: **********</li>
        </ul>
        <p>2. Nagad:</p>
        <ul className="ps-[20px]">
          <li>- Account Type: Personal</li>
          <li>- Account Number: *******</li>
        </ul>
        <p>3. Rocket:</p>
        <ul className="ps-[20px]">
          <li>- Account Type: Personal</li>
          <li>- Account Number: *********</li>
        </ul>

        <p>Payment Process (bKash, Nagad, Rocket):</p>

        <p>
          5. Open the respective mobile app or dial the appropriate code to
          access your mobile menu.
        </p>
        <ul className="ps-[20px]">
          <li>- For bKash, use the bKash app or dial *247#.</li>
          <li>- For Nagad, use the Nagad app or dial *167#.</li>
          <li>- For Rocket, use the Rocket app or dial *322#.</li>
        </ul>
        <p>6. Select &apos;Send Money.&apos;</p>

        <p>
          7. Enter the provided account number based on your chosen payment
          method:
        </p>
        <ul className="ps-[20px]">
          <li>
            - For bKash, Nagad, and Rocket, use the provided Account Number.
          </li>
        </ul>
        <p>8. Input the exact bill amount.</p>

        <p>9. Confirm the transaction by entering your mobile menu PIN:</p>
        <ul className="ps-[20px]">
          <li>- For bKash, use your bKash Mobile Menu PIN.</li>
          <li>- For Nagad, use your Nagad Mobile Menu PIN.</li>
          <li>- For Rocket, use your Rocket Mobile Menu PIN.</li>
        </ul>
        <p>
          10. After successfully sending the money, you&apos;ll receive a Transaction
          ID (TRX ID) or reference number. Please make a note of this
          Transaction ID or reference number.
        </p>
      </div>
    </>
  );
};

export default Payment;
