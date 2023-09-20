import React from "react";
import Image from "next/image";
import Register from "./Register";
import styles from "./main.module.css";
import Footer from "./Footer";

export default function Main() {
  return (
    <div className="bg-[#f2f3f6] flex flex-col">
      <div className="text-black md:w-[38.96%] h-[40.53%] md:absolute mx-[20px]">
        <div className="mt-[20.23%] md:ms-[16%]">
          <h1 className="md:w-[566px] md:h-[82px] md:text-[60px] text-4xl font-bold">
            League of Engineers
          </h1>
          <p className="md:w-[150px] h-[55px] md:text-[32px] text-2xl font-semibold">
            Season <span className={`${styles.wrapper}`}>2</span>
          </p>
          <p className="my-[22px] md:w-[403px] h-auto text-[#667085] text-[20px]">
            Hey there, SETS students! The League of Engineers Season 2 is coming back and it&apos;s super exciting! Here&apos;s the deal: if you&apos;re a student from SETS, you can sign up all by yourself. Then comes the fun part! Imagine a magical auction where managers pick players like the&apos;re building a dream team and that&apos;s what is happening! So register, show your skills in LOE2 and be part of this fantastic football adventure. Don&apos;t miss out on the chance to shine and make new friends.
          </p>
          <div>
            <Register className="w-[202px] h-[60px] gap-[10px] py-[8px] px-[15px] md:mx-0 mx-auto md:hidden" />
          </div>
        </div>
      </div>
      <div className="ms-[36.27%] mt-[20.2%] h-[70.38%] w-[63.75%] bottom-[10rem] absolute md:block hidden">
        <Image
          src="/kicking.png"
          height={10000}
          width={10000}
          alt="Picture of the author"
        />
      </div>
      <Footer className="md:absolute md:bottom-0"/>
    </div>
  );
}
