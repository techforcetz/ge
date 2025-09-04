"use client";
import { useEffect, useRef, useState } from "react";
import TypeIt from "typeit";
import { motion } from "framer-motion";
import OwnersCarousel from "@/app/owner";
import Projects from "./projects";
import Footer from "./footer";
import ReviewsPage from "./reviews";
import Image from "next/image";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const textRef = useRef(null);

  useEffect(()=>{
    if(textRef.current){
      new TypeIt(textRef.current, {
        speed: 100,
        waitUntilVisible: true,
      })
      .type("Building Your Future", {delay: 300})
      .pause(2000)
      .delete(6)
      .type("Success", {delay: 300})
      .pause(2000)
      .delete(7)
      .type("Dreams", {delay: 300})
      .go();
    }
  },[]);

  return (
    <>
      {/* Floating navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl z-50">
        {/* Outer container */}
        <div className="bg-white/20 backdrop-blur-md text-black shadow-lg rounded-full px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-500 drop-shadow-lg">G&E INVESTMENT</h1>

          {/* Desktop links */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a
                href="#"
                className="pb-1 border-b-2 border-transparent hover:border-yellow-400 transition duration-300 text-yellow-400 text-2xl"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="pb-1 border-b-2 border-transparent hover:border-yellow-400 transition duration-300 text-yellow-400 text-2xl"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="pb-1 border-b-2 border-transparent hover:border-yellow-400 transition duration-300 text-yellow-400 text-2xl"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="pb-1 border-b-2 border-transparent hover:border-yellow-400 transition duration-300 text-yellow-400 text-2xl"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden block text-yellow-400 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile links (appear below rounded navbar) */}
        {isOpen && (
          <ul className="md:hidden mt-2 bg-white/20 backdrop-blur-md rounded-lg shadow-lg text-white flex flex-col space-y-2 p-4">
            <li>
              <a href="#" className="font-semibold text-2xl text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold text-2xl text-yellow-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold text-2xl text-yellow-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold text-2xl text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>

      {/* Main content */}
      {/* i have a video link 'https://www.pexels.com/download/video/2048246/'*/}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://www.pexels.com/download/video/2048246/" 
        />

        {/* Overlay text first screen */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8 md:px-16">
          {/* top side */}
          <div className="bg-white/10 background-blur-md p-8 rounded-lg shadow-lg">
            <h3 ref={textRef} className="text-2xl md:text-5xl font-bold text-white drop-shadow-lg"></h3>
            <p className="mt-4 text-xl md:text-2xl text-white drop-shadow-md">
                We specialize in <span className="text-yellow-400 text-2xl font-semibold">high-quality</span> pavement blocks for construction projects.<br/> Reliable solutions for homes, businesses, and real estate developments.
            </p>
          </div>
          {/* Buttons below glass card */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button className="bg-white/10 backdrop-blur-md px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:bg-white/20 transition"> Our Products </button>
            <button className="flex items-center bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white shadow-lg hover:bg-white/20 transition">
              <span className="mr-2 font-semibold">Scroll Down</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Optional overlay dark layer for better contrast */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      </div>

{/* Second screen - Why Choose Us */}
    <div className="min-h-[80vh] w-full flex flex-col md:flex-row items-center justify-center px-8 md:px-16 py-12 bg-gray-100">
      
      {/* Left side - Image */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}        // start off to the left and invisible
        whileInView={{ opacity: 1, x: 0 }}      // animate to visible and centered
        viewport={{ once: true }}               // animate only once
        transition={{ duration: 1.3 }}
        className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0 items-center"
      >
        <Image
          src="https://images.pexels.com/photos/32751450/pexels-photo-32751450.jpeg"
          alt="Owners"
          className="rounded-lg shadow-lg object-cover w-full max-w-md md:max-w-lg  h-auto"
        />
      </motion.div>

      {/* Right side - Text */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}        // start off to the right and invisible
        whileInView={{ opacity: 1, y: 0 }}      // animate to visible and centered
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="md:w-1/2 w-full flex flex-col justify-center md:pl-12 bg-white/60 backdrop-blur-md shadow-lg p-8 rounded-lg"
      >
        <h2
          className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/17366761/pexels-photo-17366761.jpeg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          Why Choose Us
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          At G&E Investment, we deliver high-quality pavement and construction solutions that you can trust.
          <br/><br/>
          Our team combines years of experience, cutting-edge techniques, and a dedication to client satisfaction.
          We ensure every project is handled professionally, efficiently, and with attention to detail.
        </p>
      </motion.div>
    </div>

    {/* projects */}
    <Projects />

    {/* our owners */}
    <OwnersCarousel />

    {/* reviews */}
    <ReviewsPage />

    {/* footer */}
    <Footer />
    </>
  );
};

export default Home;
