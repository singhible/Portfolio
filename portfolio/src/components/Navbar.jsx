import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assests/logo.png';
const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handleclick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt= "Logo" style={{width: '50px'}} />
        </div>
        {/* menu*/ }
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>SKills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        {/** Hamburger menu*/}
        <div onclick={handleclick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/*Mobile menu */}
           <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>  
                <li className='py-6 text-4xl'>SKills</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

        {/*Social icons*/}
        <div className='hidden'></div>

    </div>
  )
}

export default Navbar