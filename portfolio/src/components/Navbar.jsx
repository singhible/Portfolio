import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assests/Real_LOGO2.png";
import {Link} from 'react-scroll';
import Pdf from '../assests/Resume_.pdf'
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleclick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="my-3">
        <img src={Logo} alt="Logo" style={{ width: "220px" }} />
      </div>
      {/* menu*/}
      <ul className='hidden md:flex'>
        <li>
          <Link to='Home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='About' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='Skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='Work' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='Contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/** Hamburger menu*/}
      <div onClick={handleclick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
      <li className='py-6 text-4xl'>
      <Link onClick={handleclick} to='home' smooth={true} duration={500}>
        Home
      </Link>
    </li>
    <li className='py-6 text-4xl'>
      {' '}
      <Link onClick={handleclick} to='about' smooth={true} duration={500}>
        About
      </Link>
    </li>
    <li className='py-6 text-4xl'>
      {' '}
      <Link onClick={handleclick} to='skills' smooth={true} duration={500}>
        Skills
      </Link>
    </li>
    <li className='py-6 text-4xl'>
      {' '}
      <Link onClick={handleclick} to='work' smooth={true} duration={500}>
        Work
      </Link>
    </li>
    <li className='py-6 text-4xl'>
      {' '}
      <Link onClick={handleclick} to='contact' smooth={true} duration={500}>
        Contact
      </Link>
    </li>
  </ul>

      {/*Social icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/babanpreet-singh-6534a8192/" target="_blank" rel="noopener noreferrer"
            >
              Linkedin <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]}">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/singhible" target="_blank" rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:bbnpreetsingh@gmail.com" target="_blank" rel="noopener noreferrer"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href= {Pdf} target="_blank" rel="noopener noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
