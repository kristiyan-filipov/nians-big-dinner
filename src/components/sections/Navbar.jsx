import React, { useRef, useState } from 'react'
import Button from '../ui/Button'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Navbar = () => {
  const navContainerRef = useRef(null);
  const [isTop, setIsTop] = useState(true);

  useGSAP(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsTop(currentScrollY === 0);

      if (currentScrollY > 0) {
        if (currentScrollY > lastScrollY) {

          gsap.to(navContainerRef.current, { y: "-120%", duration: 0.3 });
        } else {

          gsap.to(navContainerRef.current, { y: "0%", duration: 0.3 });
        }
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: section,
          offsetY: 0
        },
        ease: "power3.inOut"
      });
    }
  };

  const scrollToContact = () => {
    
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: "max",
        offsetY: 0
      },
      ease: "power3.inOut"
    });
  };

  return (
    <nav
      ref={navContainerRef}
      className={`fixed overflow-hidden flex justify-between rounded-full sm:px-2 top-2.5 py-1.5 h-fit inset-x-0 sm:inset-x-4 z-50
          transition-colors duration-300 select-none ${isTop ? 'bg-transparent' : 'bg-red-950'}`}
    >
      <header className='flex gap-1.5 md:gap-4 items-center'>
        <img
          src='./images/credits1.png'
          alt='Linktree icon'
          className='size-8.5 my-0.5 ml-2.5 cursor-pointer hover:scale-90'
          onClick={() => window.open('https://linktr.ee/whalesharkollie', '_blank')}
        />
        <Button
          rightIcon='open_in_new'
          onClick={() => window.open('https://youtu.be/vTGU3JEsOIs?si=7nQSTuaMA9DU2mUy', '_blank')}
          text='Watch on YouTube'
        />
      </header>
      <div className='flex sm:gap-4 items-center'>
        <Button
          text='About'
          className='bg-transparent text-white hover:bg-white hover:text-black'
          onClick={() => scrollToSection('about-section')}
        />
        <Button
          text='Concept art'
          className='bg-transparent text-white hover:bg-white hover:text-black'
          onClick={() => scrollToSection('concept-art-section')}
        />
        <Button
          text='Contact'
          className='bg-transparent text-white hover:bg-white hover:text-black'
          onClick={scrollToContact}
        />
      </div>
    </nav>
  )
}

export default Navbar