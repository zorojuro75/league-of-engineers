'use client'
import React from 'react'

interface FormItemsProps{
    placeHolder: string;
    label: string;
    inputType: string;
    accept?: string;
    name?: string;
}


const FormItems:React.FC<FormItemsProps> = ({
    placeHolder,
    label,
    inputType,
    accept,
    name
}) => {
  return (
    <div className="table-row space-x-2 md:space-x-0">
        <label htmlFor="name" className="text-white py-5 table-cell">
          {label}
        </label>
        <input
          type={inputType}
          placeholder={placeHolder}
          accept={accept}
          name={name}
          autoComplete='off'
          className="bg-background border border-cyan-700 rounded p-2 table-cell w-[94%]"
        />
      </div>
  );
}

export default FormItems;