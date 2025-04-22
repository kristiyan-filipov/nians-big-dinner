import React, { useRef } from 'react'
import Tilt from '../ui/Tilt'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const About = () => {
  const contentRef = useRef(null)
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)
  const cornerImageRef = useRef(null)
  const fullScreenImageRef = useRef(null)
  const backgroundRef = useRef(null)

  const handleScrollToEnd = () => {
    const trigger = ScrollTrigger.getById("fullscreenTrigger");
    if (trigger) {
      gsap.to(window, { 
        scrollTo: trigger.end,
        ease: 'power2.in'
      });
    }
  };
  
  const handleScrollToStart = () => {
    const trigger = ScrollTrigger.getById("fullscreenTrigger")
    if (trigger) {
      gsap.to(window, { 
        scrollTo: trigger.start,
        duration: 1
      });
    }
  }
  useGSAP(() => {
    gsap.from(contentRef.current, {
      y: 700,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        id: "fullscreenTrigger",
        trigger: sectionRef.current,
        start: "bottom bottom",
        scrub: true,
        pin: true,
        anticipatePin: 0.5,
        ease: "power3.inOut"
      }
    });

    tl
      .to({}, { duration: 0.1 })
      .to(imageRef.current, { scale: 0, opacity: 0, ease: "power3.inOut" }, 0.1)
      .to(cornerImageRef.current, { opacity: 0, duration: 0.5 }, 0.1)
      .fromTo(fullScreenImageRef.current, { scale: 0 }, { scale: 1, ease: "power2.inOut" }, 0.1)
      .to(textRef.current, { opacity: 0, ease: "power3.inOut" }, 0.1)
      .to(backgroundRef.current, { opacity: 0.5, ease: "power3.inOut" }, 0.1)
      .to({}, { duration: 0.2 })
  }, {scope: sectionRef} );

  return (
      <div id="about-section" ref={sectionRef} className='w-screen h-lvh relative overflow-hidden bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(17,17,17,0.6)_90%,rgba(17,17,17,0.6)_100%),url("/images/red_background.png")]'>
        <div ref={backgroundRef} className='absolute inset-0 bg-black opacity-0'/>
        <div ref={contentRef} className='h-full mx-10 flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-13'>
          <Tilt>
            <img
              ref={imageRef}
              className='w-[10rem] sm:w-[16rem] cursor-pointer rounded-sm drop-shadow-2xl'
              src='images/poster_small.png'
              alt='Poster'
              onClick={handleScrollToEnd}
            />
          </Tilt>

          <div ref={textRef} className=' text-center text-shadow-br-light text-md md:text-lg font-dosis-semibold w-fit sm:w-xl bg-black/25 p-4 sm:p-8 rounded-2xl text-amber-300'>
            <h2 className='font-bold text-2xl md:text-3xl mb-5 text-glow-gold'>
              Nian's Big Dinner <span className='inline-block'>( 年夜飯 )</span>
            </h2>
            <p>
              is a short film about the Lunar New Year Monster's <span className='inline-block'>(年獸)</span>&nbsp;
              insatiable hunger and the trail of destruction it leaves across the lands while terrorizing
              little dumpling villagers in attempt to fill its belly.
            </p>
            <p className='mt-4'> What will become of this little monster as it searches for its next meal? </p>
          </div>

        </div>
        <div className='absolute inset-0 flex justify-center items-center pointer-events-none'>
        <img
          ref={fullScreenImageRef}
          className='object-contain max-h-full overflow-hidden cursor-pointer drop-shadow-2xl pointer-events-auto'
          src='images/poster_small.png'
          alt='Poster'
          onClick={handleScrollToStart}
        />
        </div>
        <div ref={cornerImageRef}>
          <img src='images/about_corner_tl.svg' className='absolute top-0 left-0 w-32 md:w-64 lg:w-sm' />
          <img src='images/about_corner_br.svg' className='absolute bottom-0 right-0 w-32 md:w-64 lg:w-sm' />
        </div>
      </div>
  )
}

export default About
