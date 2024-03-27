import React from "react";
import { FaGithub, FaYoutube, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "../assets/avatar.svg";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <h1 className="mb-6 text-[46px] font-bold leading-[0.8] lg:text-[110px]">
              Ömer{" "}
              <span className="text-white mb-6 text-[46px]">GÜZELAYDIN</span>
            </h1>
            <div className="text-accent mb-6 text-[36px] lg-text[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="mr-4">I am a </span>
              <TypeAnimation
                sequence={[
                  "Frontend",
                  2000,
                  "Mobile",
                  2000,
                  "Developer",
                  1000,
                ]}
                speed={25}
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">Lorem ipsum</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 max-w-max mx-auto lg:mx-0">
            <button className="btn btn-lg mb-4 lg:mb-0">contact me</button>
            <a href="#" className="text-gradient btn-link"> My Portfolio </a>
          </div>
          <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 mt-4 lg:mt-0">
            <a href="#">
              <FaLinkedin/>
            </a>
            <a href="#">
              <FaGithub/>
            </a>
            <a href="#">
              <FaInstagram/>
            </a>
            <a href="#">
              <FaYoutube/>
            </a>
          </div>
          <div>
            <img src={Image} alt="Avatar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
