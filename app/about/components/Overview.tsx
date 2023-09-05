'use client'
import React from 'react'
import {Carousel } from '@material-tailwind/react'
const Overview = () => {
  return (
    <div className='flex my-[96px]'>
        <div className='w-[50%] gap-[32px]'>
            <div className='h-[105px]'></div>
            <div className='h-[364px]'></div>
        </div>
        <div className='w-[50%]'> 
            <Carousel className=''>
                <div>hei</div>
                <div>hui</div>
                <div>hiya</div>
            </Carousel>
        </div>
    </div>
  )
}

export default Overview