import React from "react";
import {
  FaGithub,
  FaYoutube,
  FaDribbble,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "../assets/avatar.svg";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              whileInView={{ show: { opacity: 1 } }}
              viewport={{ once: false, threshold: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[55px] text-center"
            >
              ÖMER{" "}
              <span className="text-[#ffffff] mb-6 text-[55px]">
                GÜZELAYDIN
              </span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              whileInView={{ show: { opacity: 1 } }}
              viewport={{ once: false, threshold: 0.7 }}
              className="text-accent mb-6 text-[46px] lg-text[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4">I am a </span>
              <TypeAnimation
                sequence={[
                  "Frontend Dev.",
                  2000,
                  "Mobile Dev.",
                  2000,
                  "SoftwareDev.",
                  1000,
                ]}
                speed={25}
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              whileInView={{ show: { opacity: 1 } }}
              viewport={{ once: false, threshold: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Lorem ipsum
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              whileInView={{ show: { opacity: 1 } }}
              viewport={{ once: false, threshold: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg mb-4 lg:mb-0">contact me</button>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <a href="#" className="text-gradient btn-link mr-4">
                  My Portfolio
                </a>
                <div className="flex items-center gap-x-6">
                  <a href="#">
                    <FaLinkedin />
                  </a>
                  <a href="#">
                    <FaGithub />
                  </a>
                  <a href="#">
                    <FaInstagram />
                  </a>
                  <a href="#">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            className="hidden lg:flex flex-1 max-w-[380px] lg:max-w-[542px]"
          >
            <img src={Image} alt="Avatar" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
