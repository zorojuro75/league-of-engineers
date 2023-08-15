"use client";
import React, { useMemo, useState } from "react";
import FormItems from "./components/FormItems";

const Registration = () => {
  const handleSubmit = () => {
    // You can add additional logic here to process the form data

    // Clear the form or perform any necessary actions

    // Optional: Display a success message or perform any other actions

    // For now, let's just clear the form fields
  };
  var formItem = useMemo(
    () => [
      {
        label: "Name",
        placeHolder: "Enter your name",
        inputType: "text",
      },
      {
        label: "ID",
        placeHolder: "Enter your IUB ID",
        inputType: "number",
      },
      {
        label: "Department",
        placeHolder: "Enter your Department",
        inputType: "text",
      },
      {
        label: "Email",
        placeHolder: "Enter your contact number",
        inputType: "email",
      },
      {
        label: "Past Tournaments",
        placeHolder: "Name your past tournment",
        inputType: "text",
      },
      {
        label: "Prefferd Position",
        placeHolder: "Enter your prefferd playing position",
        inputType: "text",
      },
      {
        label: "Image",
        placeHolder: '',
        inputType: "file",
        accept: "image/*",
      },
      {
        label: "Transaction",
        placeHolder: "Enter transaction ID",
        inputType: "text",
      },
    ],
    []
  );


  return (
    <div className="bg-background">
      <h1 className="text-center text-3xl py-[20px] px-2">
        Player Registration Form
      </h1>
      <form
        onSubmit={handleSubmit}
        className="md:mx-auto mx-4 mb-5 md:table md:text-lg text-md md:w-[40%]"
      >

        {formItem.map((item) => (
          <FormItems key={item.label} {...item} />
        ))}

        <div className="border text-center py-[8px] mt-5 rounded-[5px] bg-cyan-500 text-black text-xl font-bold table-caption  caption-bottom md:w-[30%] w-[98%] md:mx-auto">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
export default Registration;
