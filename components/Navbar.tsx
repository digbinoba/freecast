'use client'; //This is a client component
import React, { useState } from 'react';
import styles from '../styles';
import menu from '../public/menu.svg';
import Image from 'next/image';
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8 mt-8`}
      >
        <h2 className="font-extrabold text-white text-[24px] leading-[30px]">
          Delano Igbinoba
        </h2>
        <svg className="fill-blue-500"></svg>
        <div>
          <Image
            src={menu}
            alt="menu"
            className="w-[24px] h-[24px] object-contain"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
            onClick={() => setMenuOpen(false)}
            className={`${menuOpen ? styles.menuOpen : 'invisible'} ${
              styles.menuItems
            }`}
          >
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
