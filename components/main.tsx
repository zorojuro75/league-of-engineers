"use client"
import React from 'react'
import Register from './Register'
import { motion } from 'framer-motion'

export default function Main() {
  return (
    <div className='bg-[#f2f3f6] h-full relative'>
        <div >
        <img
            src="/kicking.png"
            width={40000}
            height={40000}
            alt="Picture of the author"
            className='absolute bottom-0 right-0 h-[95%] w-[80%]'
        />
        </div>
        <motion.div className='text-black absolute top-[11rem] left-[5%]'
        initial={{opacity:0, scale:0}}
        animate={{opacity:1, scale: 1}}
        transition={{
          type: "spring",
          stiffness: 80,
          duration:0.25,
        }}>
            <h1 className='font-bold text-[5rem] max-w-[50vw]'>League of Engineers</h1>
            <p className='font-extrabold text-[3rem] mb-10'>Season <span className='text-[#e6af51]'>2</span></p>
            <p className='max-w-[30vw] font-semibold text-[#667085] text-[1.5rem] leading-9' >Where Engineering Excellence Meets Football Fervor - Uniting Our Departments Best on the Pitch! Saminar ma ye ye wakka wakka ye ye saminar pola saminar pola this time for rofficaa!</p>
            <motion.div initial= {{opacity:0, scale:0}}
            animate={{opacity:1, scale:1}}
            transition={{
              type: "spring",
              delay:0.25,
            }}
            >
              <Register className="max-w-[15vw] h-[4.5vh] rounded-[0.75rem] flex justify-center bg-[#e3a02a]"/>
            </motion.div>
            
        </motion.div>
    </div>
  )
}
