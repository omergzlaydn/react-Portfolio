import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 '>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2x1 text-white/50'>
          <Link to='section1' smooth={true} duration={500}>
            <BiHomeAlt/>
          </Link>
          <Link to='section2' smooth={true} duration={500}>
            <BsClipboardData/>
          </Link>
          <Link to='section3' smooth={true} duration={500}>
            <BsBriefcase/>
          </Link>
          <Link to='section4' smooth={true} duration={500}>
            <BsChatSquare/>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
