'use client'
import React, { useState } from "react";

const Registration = () => {
  const handleSubmit = () => {
    
    // You can add additional logic here to process the form data
    
    // Clear the form or perform any necessary actions
    
    // Optional: Display a success message or perform any other actions
    
    // For now, let's just clear the form fields
    setName("Enter your full name");
    setId("Enter your IUB ID");
    setDepartment("Enter your department name");
    setEmail("example@email.com");
    setContact("Enter your contact number");
    setPast("Enter past tournament name or write 'No'");
    setPosition("Enter your playing position");
    setImage(null);
    setTransaction("Enter Transaction number");
  };

  const [name, setName] = useState("Enter your full name");
  const [id, setId] = useState("Enter your IUB ID");
  const [department, setDepartment] = useState("Enter your department name");
  const [email, setEmail] = useState("example@email.com");
  const [contact, setContact] = useState("Enter your contact number");
  const [past, setPast] = useState("Enter past tournament name or write 'No'");
  const [position, setPosition] = useState("Enter your playing position");
  const [image, setImage] = useState(null);
  const [transaction, setTransaction] = useState("Enter Transaction number");

  return (
    <div className="bg-background">
    <h1 className="text-center text-3xl py-[20px]">Registration Form for League of Engineers</h1>
    <form onSubmit={handleSubmit} className="md:mx-auto mx-4 mb-5 table text-lg md:text-md">
      <div className="table-row">
        <label htmlFor="name" className="text-white py-5 table-cell">
          Name
        </label>
        <input
          type="text"
          placeholder={name}
          required
          className="w-[95%] bg-background border border-cyan-700 rounded p-2 table-cell"
        />
      </div>
      <div className="table-row">
        <label htmlFor="" className="text-white py-5 table-cell">
          ID
        </label>
        <input
          type="number"
          placeholder={id}
          required
          className="w-[95%] bg-background border border-cyan-700 rounded p-2 table-cell"
        />
      </div>
      <div className="table-row">
        <label htmlFor="" className="text-white py-5 table-cell">
          Email
        </label>
        <input
          type="email"
          placeholder={email}
          required
          className="w-[95%] bg-background border border-cyan-700 rounded p-2 table-cell"
        />
      </div>
      <div className="table-row">
        <label htmlFor="" className="text-white py-5 table-cell">
          Contact
        </label>
        <input
          type="number"
          placeholder={contact}
          required
          className="w-[95%] bg-background border border-cyan-700 rounded p-2 table-cell"
        />
      </div>
      <div className="table-row">
        <label htmlFor="" className="text-white py-5 table-cell">
          Department
        </label>
        <input
          type="text"
          placeholder={department}
          required
          className="w-[95%] bg-background border border-cyan-700 rounded p-2 table-cell"
        />
      </div>
      <div className="table-row">
        <label htmlFor="" className="text-white py-5 table-cell">
          Past Tournament 
        </label>
        <input
          type="text"
          placeholder={past}
          required
          className="w-[95%] bg-background border border-cyan-700 rounded p-2 table-cell"
        />
      </div>
      <div className="table-row">
        <label htmlFor="" className="text-white py-5 table-cell">
          Position 
        </label>
        <input
          type="text"
          placeholder={position}
          required
          className="w-[95%] bg-background border border-cyan-700 rounded p-2 table-cell"
        />
      </div>

      <div className="table-row">
        <label htmlFor="" className="text-white py-5 table-cell">
          Image
        </label>
        <input
          type="file"
          accept="image/*"
          required
          className="w-[95%] bg-background border border-cyan-700 rounded p-2 table-cell"
        /> 
      </div>
      <div className="table-row">
        <label htmlFor="" className="text-white py-5 table-cell">
          Transaction 
        </label>
        <input
          type="text"
          placeholder={transaction}
          required
          className="w-[95%] bg-background border border-cyan-700 rounded p-2 table-cell"
        />
      </div>
      <div className="border text-center py-[4px] px-12 mt-5 rounded-[5px] bg-cyan-500 text-black text-lg">
        <input type="submit" value="Submit" />
      </div>
    </form>
    </div>
  );
};

export default Registration;

