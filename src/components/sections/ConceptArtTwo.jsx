import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/all';
import Tilt from '../ui/Tilt'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

const ConceptArtTwo = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      y: -100,
      scrollTrigger: {
        ease: "power3.in",
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true
      }
    });
    gsap.from(containerRef2.current, {
      y: -150,
      scrollTrigger: {
        ease: "power3.in",
        trigger: sectionRef.current,
        start: "top+=50 bottom",
        end: "bottom bottom",
        scrub: true
      }
    });
    gsap.from(containerRef3.current, {
      y: -200,
      scrollTrigger: {
        ease: "power3.in",
        trigger: sectionRef.current,
        start: "top+=100 bottom",
        end: "bottom bottom",
        scrub: true
      }
    })
  }, { scope: sectionRef })

  return (
    <div
      ref={sectionRef}
      className="w-screen h-lvh overflow-hidden relative bg-[linear-gradient(to_top,rgba(0,0,0,0)_0%,rgba(17,17,17,0.3)_90%,rgba(17,17,17,0.8)_100%),url('/images/red_background.png')]"
    >
      <div className='absolute top-5 lg:top-2 text-glow text-6xl lg:text-8xl text-center overflow-show w-fit h-fit text-white absolute-center-w font-dosis-semibold z-40'>
        <div className='absolute w-full h-full lg:p-8 lg:px-12 bg-red-950/80 rounded-full blur-2xl lg:blur-2xl z-10' />
        <span className='relative z-20'>Colourscript</span>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center w-full h-full">
        <div ref={containerRef} className='flex gap-4 z-30'>

          <Tilt><img src="./images/storyboard/colourscript1.png" /></Tilt>
          <Tilt><img src="./images/storyboard/colourscript2.png" /></Tilt>
          <Tilt><img src="./images/storyboard/colourscript3.png" /></Tilt>
          <Tilt><img src="./images/storyboard/colourscript4.png" /></Tilt>
        </div>
        <div ref={containerRef2} className='flex gap-4 z-20'>
          <Tilt><img src="./images/storyboard/colourscript5.png" /></Tilt>
          <Tilt><img src="./images/storyboard/colourscript6.png" /></Tilt>
          <Tilt><img src="./images/storyboard/colourscript7.png" /></Tilt>
          <Tilt><img src="./images/storyboard/colourscript8.png" /></Tilt>
        </div>
        <div ref={containerRef3} className='flex gap-4 z-10'>
          <Tilt><img src="./images/storyboard/colourscript9.png" /></Tilt>
          <Tilt><img src="./images/storyboard/colourscript10.png" /></Tilt>
          <Tilt><img src="./images/storyboard/colourscript11.png" /></Tilt>
          <Tilt><img src="./images/storyboard/colourscript12.png" /></Tilt>
        </div>
      </div>
    </div>
  );
};

export default ConceptArtTwo;