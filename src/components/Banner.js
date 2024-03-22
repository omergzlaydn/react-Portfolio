import React from "react";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "../assets/avatar.svg";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h1 className="mb-6 text-[46px]">
              Ömer <span className="text-white mb-6 text-[46px]">GÜZELAYDIN</span>
            </h1>
            <div className="text-accent mb-6 text-[36px] lg-text[60px]">
              <span className="mr-4">I am a </span>
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "Mobile Developer",
                  2000,
                  "Software Developer",
                  2000,
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
              />
            </div>
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
