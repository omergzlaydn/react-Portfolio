import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa'; // Iconları import ettik

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          
        </div>
        <motion.div
          variants={fadeIn}
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
          className='text-center mt-12'
        >
          <h2 className='text-3xl lg:text-5xl font-bold mb-6'>About Me</h2>
          <p className='text-lg lg:text-xl leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            efficitur mi ut erat eleifend dapibus. Nulla facilisi. Integer nec
            fermentum ex, in rutrum sapien. Vivamus tincidunt sapien sed
            lectus sagittis, a consequat enim ultrices. Phasellus posuere
            aliquam metus, id accumsan velit pharetra vel. Sed lobortis justo
            sit amet orci venenatis, at molestie turpis consectetur.
          </p>
          <div className='mt-8'>
            <p className='text-xl font-semibold'>Years of Experience:</p>
            <motion.div variants={fadeIn} className='text-3xl lg:text-5xl'>
              <CountUp start={0} end={5} duration={2.5} suffix='+' />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          whileInView={{ show: { opacity: 1 } }}
          viewport={{ once: false, threshold: 0.7 }}
          className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 justify-center" // Ortalamak için justify-center sınıfı eklendi
        >
          <button className="btn btn-lg mb-4 lg:mb-0">contact me</button>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          whileInView={{ show: { opacity: 1 } }}
          viewport={{ once: false, threshold: 0.7 }}
          className="flex flex-col lg:flex-row items-center gap-y-10 lg:gap-y-0 lg:gap-x-6 lg:justify-start mb-12 mx-auto lg:mx-0" // flex-col, gap-y-10 ve lg-flex-row sınıfları eklendi
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;
