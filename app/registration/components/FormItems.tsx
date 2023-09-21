"use client";
import React from "react";

interface FormItemsProps {
  placeHolder: string;
  label: string;
  inputType: string;
  accept?: string;
  name?: string;
  info?: string;
  itemList: string[];
}

const FormItems: React.FC<FormItemsProps> = ({
  placeHolder,
  label,
  inputType,
  accept,
  name,
  info,
  itemList,
}) => {
  return (
    <>
      {info != null ? (
        <div className="col-span-2 text-red-700">{info}</div>
      ) : null}
      <div className="border flex items-center">
        <label htmlFor={name}>
          {label}
        </label>
      </div>
      <div>
        {inputType === "dropdown" ? (
          <select
            placeholder={placeHolder}
            className="border border-gray-700 rounded p-2 w-[94%]"
          >
            {itemList.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={inputType}
            placeholder={placeHolder}
            accept={accept}
            name={name}
            required
            autoComplete="off"
            className="border border-gray-700 rounded p-2 w-[94%]"
          />
        )}
      </div>
    </>
  );
};

export default FormItems;
