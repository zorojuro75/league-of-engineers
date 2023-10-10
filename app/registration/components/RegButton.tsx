"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
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
        Click Here!!!
      </div>
      {isBlurred && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50 backdrop-fixed z-50">
          <motion.div
            initial={{
              scale: 0.5,
              opacity: .5,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.35,
            }}
            className="bg-white p-6 rounded-lg shadow-lg overflow-y-auto md:max-h-[100vh] max-h-[80vh]"
          >
            <div
              onClick={callForm}
              className="relative text-xl font-bold cursor-pointer border-2 border-black w-[25px] h-[25px] flex justify-center items-center text-red-400"
            >
              x
            </div>
            <div>{props.children}</div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default RegButton;
