"use client"
import React from 'react'
import Image from 'next/image'
import Register from './Register'
import { motion } from 'framer-motion'
import styles from "./main.module.css"

export default function Main() {
  return (
    <div className='bg-[#f2f3f6] h-[93%] relative'>
        <div >
        <Image
            src="/kicking.png"
            width={40000}
            height={40000}
            alt="Picture of the author"
            className='absolute bottom-0 right-0 h-[95%] w-[77rem]'
        />
        </div>
        <div className='text-black absolute top-[7rem] left-[5rem]'>
            <h1 className='font-bold text-[5rem] max-w-[50vw]'>League of Engineers</h1>
            <p className='font-extrabold text-[3rem] mb-10'>Season <span className={`${styles.wrapper}`}>2</span></p>
            <p className='max-w-[30vw] font-semibold text-[#667085] text-[1.5rem] leading-9' >Where Engineering Excellence Meets Football Fervor - Uniting Our Departments Best on the Pitch! Saminar ma ye ye wakka wakka ye ye saminar pola saminar pola this time for rofficaa!</p>
            <div>
              <Register className="max-w-[12rem] h-[3.5rem] rounded-[0.75rem] flex justify-center bg-[#e3a02b]"/>
            </div>
            
        </div>
    </div>
  )
}
