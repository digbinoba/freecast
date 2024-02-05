'use client';
import React, { useState } from 'react';
import styles from '../styles';
import Image from 'next/image';
import headshot from '../public/headshot.png';
const Hero = () => (
  <section className="container">
    <div className="bg-teal opacity-50"></div>
    <div className="flex flex-col items-start z-1 text-white">
      <h1 className="title">Hi, I'm</h1>
      <h1 className="title">Delano Igbinoba</h1>
      <p className='w-[80%]'>
        I'm a design-focused full-stack software engineer dedicated to creating beautiful interfaces & memorable experiences into real world solutions. Take a look into what I can do for you.
      </p>
      <button className={`${styles.customButton} mt-4`}>
        <a href="#projects">Explore</a>
      </button>
    </div>
    <Image
      src={headshot}
      alt="headshot"
      className="w-[50%] z-1 floating rounded-full"
    />
  </section>
);

export default Hero;
