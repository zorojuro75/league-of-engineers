"use client";
import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
};

const RegButton = (props: Props) => {
  const [isBlurred, setIsBlurred] = useState(false);

  const callForm = () => {
    setIsBlurred(!isBlurred);
  };

  return (
    <>
      <div
        className="mx-auto my-5 px-10 py-2 bg-blue-500 border rounded-[8px] text-2xl font-semibold cursor-pointer"
        onClick={callForm}
      >
        Click to Register
      </div>
      {isBlurred && (
  <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50 backdrop-fixed">
    <div className="bg-white p-6 rounded-lg shadow-lg overflow-y-auto xl:overflow-y-hidden md:max-h-[100vh] max-h-[80vh]">
      <div onClick={callForm} className="relative md:right-[-770px] text-xl font-bold cursor-pointer border-2 border-black w-[25px] h-[25px] flex justify-center items-center text-red-400">x</div>
      <div>{props.children}</div>
    </div>
  </div>
)}
    </>
  );
};

export default RegButton;