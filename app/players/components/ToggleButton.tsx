import React from 'react'

type Props = {}

const ToggleButton = (props: Props) => {
  return (
    <div className='bg-green-500 bg-opacity-50 shadow-lg rounded-full h-[60px] w-[160px] flex'>
        <div className='bg-green-500 shadow-lg rounded-full h-[60px] w-[60px]'></div>
        <div className='flex justify-center items-center w-[100px] text-2xl font-bold'>Female</div>
    </div>
  )
}

export default ToggleButton