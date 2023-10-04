"use client";
import React from "react";

interface FormItemsProps {
  placeHolder: string;
  label: string;
  inputType: string;
  accept?: string;
  name: string;
  info?: string;
  itemList: string[];
  selectedGender: string;
  onGenderChange: (gender: string) => void;
}

const FormItems: React.FC<FormItemsProps> = ({
  placeHolder,
  label,
  inputType,
  accept,
  name,
  info,
  itemList,
  selectedGender,
  onGenderChange,
}) => {
  return (
    <>
      {info != null ? (
        <div className="col-span-2 text-red-700">{info}</div>
      ) : null}
      <div className="border border-white flex items-center">
        <label htmlFor={name}>{label}</label>
      </div>
      <div>
        {inputType === "dropdown" && label === "Gender" ? (
          <select
            className="border border-gray-700 rounded p-2 w-[94%] bg-white"
            name={name}
            id={name}
            required
            onChange={(e) => {
              onGenderChange(e.target.value);
            }}
          >
            {itemList.map((item, index) =>
              item == "" ? (
                <option key={index} value="" selected disabled hidden>
                  Select an option
                </option>
              ) : (
                <option key={index} value={item}>
                  {item}
                </option>
              )
            )}
          </select>
        ):
        inputType === "dropdown" ? (
          <select
            className="border border-gray-700 rounded p-2 w-[94%] bg-white"
            name={name}
            id={name}
            required
          >
            {itemList.map((item, index) =>
              item == "" ? (
                <option key={index} value="" selected disabled hidden>
                  Select an option
                </option>
              ) : (
                <option key={index} value={item}>
                  {item}
                </option>
              )
            )}
          </select>
        ) : (
          <input
            type={inputType}
            placeholder={placeHolder}
            accept={accept}
            name={name}
            required
            autoComplete="off"
            className="border border-gray-700 rounded p-2 w-[94%] bg-white"
          />
        )}
      </div>
    </>
  );
};

export default FormItems;
