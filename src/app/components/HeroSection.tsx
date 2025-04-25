"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
          <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hello, I&apos;m{" "}
          </span>{" "}
          <br></br>
          <TypeAnimation
            sequence={[
              "Rahul",
              1000,
              "Backend Developer",
              1000,
              "Android Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] mb-6 mt-6 textl-lg lg:text-xl font-sans">
            Hey there! 😄 I am Rahul Grover, a Software Engineer who&apos;s 
            not just coding at Google, but also occasionally debugging life. 
        </p>
        <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl font-sans">    
            This little corner of the internet is where I share my 
            adventures, code, and the occasional random thought—so you can get 
            to know me without the awkward small talk. Hope you enjoy scrolling 
            through my portfolio as much as I enjoyed creating it! 
        </p>
        <p className="text-[#ADB7BE] mb-12 textl-lg lg:text-xl font-sans">    
            If you&apos;ve got questions, feedback, or just want to debate whether 
            tabs are better than spaces, hit me up. Let&apos;s connect, chat, and 
            maybe even solve a bug or two together.
        </p>
        <div>
          <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
            Hire Me
          </button>
          <button className="m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1  text-white rounded-full">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </button>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="bg-[#3c3c3c] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
          <Image
            src="/images/rahul-ai.png"
            alt="rahul image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
export default HeroSection;