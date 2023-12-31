// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { tjIcon, menu, close } from '../assets';

const Navbar = () => {

  const[active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
    className={`${styles.paddingX} w-full flex items-center py-5
    fixed top-0 z-20`}
    style={{
      backgroundImage:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent)"
    }}>

      <div
      className="w-full flex justify-between items-center max-w-7x1 mx-auto"
      >
      <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={tjIcon} alt={tjIcon} className="w-18 h-9 object-contain" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 justify-end"  style={{ color: '#FFFFFF' }}>
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary-100"
                } hover:text-white text-[18px] font-medium cursor-pointer `}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            className="w-[28px] h-[28px] object-contain cursor-pointer z-20 " 
            onClick={() => setToggle(!toggle)}
            src={toggle ? close : menu}
            alt={menu}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } pt-20 p-6 absolute top-2 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <div
							className="w-full h-full"
							style={{
								position: "absolute",
								top: -15,
								left: 0,
								width: "120%",
								height: "110%",
								zIndex: -1,
								backgroundImage:
									"linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7) )",
							}}
						></div>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-secondary-400" : "text-secondary-50"
                    } font-montserrat font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar