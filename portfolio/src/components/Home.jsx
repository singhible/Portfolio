import React from "react";
import Work from "./Work";
import {Link} from 'react-scroll';
import TypeWriterEffect from 'react-typewriter-effect';
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="Home" className="w-full h-screen bg-[#0a192f]">
      {/*container */}
      <div name='scroll-div' className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] animate-pulse">
        Babanpreet Singh.
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] ">
        <TypeWriterEffect
        startDelay={100}
        cursorColor="#8892b0"
        text="I'm an aspiring Full Stack developer."
        typeSpeed={85}
        hideCursorAfterText={false}
      />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm also an university student who is currently building its web-based
          MacOS.{" "}
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
          <Link to='Work' smooth={true} duration={500}>View Projects</Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
