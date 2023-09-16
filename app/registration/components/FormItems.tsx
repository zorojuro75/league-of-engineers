"use client";
import React from "react";

interface FormItemsProps {
  placeHolder: string;
  label: string;
  inputType: string;
  accept?: string;
  name?: string;
  itemList: string[];
}

const FormItems: React.FC<FormItemsProps> = ({
  placeHolder,
  label,
  inputType,
  accept,
  name,
  itemList,
}) => {
  return (
    <div className="table-row space-x-2 md:space-x-0">
      <label htmlFor={name} className="py-5 table-cell">
        {label}
      </label>
      {inputType === "dropdown" ? (
        <select 
        placeholder={placeHolder}
        className="border border-gray-700 rounded p-2 table-cell w-[94%]">
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
          className="border border-gray-700 rounded p-2 table-cell w-[94%]"
        />
      )}
    </div>
  );
};

export default FormItems;
