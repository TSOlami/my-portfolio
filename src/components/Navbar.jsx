import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, tjIcon, menu, close } from '../assets';

const Navbar = () => {

  const[active, setActive] = useState("")

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5
    fixed top-0 z-20 bg-primary`}>

      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
      <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={tjIcon} alt={tjIcon} className="w-18 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Tijani Saheed Olalekan<span className='sm:block hidden'>| Software Engineer</span>
          </p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar