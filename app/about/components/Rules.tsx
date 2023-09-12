import React from 'react'
import { IconType } from 'react-icons/lib'
type rulesProps = {
    icon : IconType,
    title: String,
    description?: String,
}
const Rules = ({
    icon, title, description
}: rulesProps) => {
  return (
    <div className='md:h-[180px] md:w-[592px] flex flex-col items-center md:mb-0 mb-[64px]'>
        <div className='rounded-[100%] bg-orange-400 w-[40px] h-[40px] flex items-center justify-center mb-[20px]'>
        {React.createElement(icon, { fontSize: 30 })}
        </div>
        <div className='font-bold text-[30px]'>{ title }</div>
        <div className='text-center text-gray-500 font-[16px]'>{ description }</div>
      
    </div>
  )
}

export default Rules