import React from 'react'
import {Fabars, FaTimes} from 'react-icons/fa';
import Logo from '../assests/logo.png';
const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt= "Logo" style={{width: '50px'}} />
        </div>
        {/* menu*/ }
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>SKills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
        {/** Hamburger menu*/}
        <div></div>

        {/*Mobile menu */}
        <div></div>

        {/*Social icons*/}
        <div></div>

    </div>
  )
}

export default Navbar