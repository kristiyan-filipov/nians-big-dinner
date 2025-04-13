import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AboutTwo = () => {
    const sectionRef = useRef()
    const foregroundRef = useRef()
    const textRef = useRef()
    const textOneRef = useRef()
    const textTwoRef = useRef()
    const textBackgroundRef = useRef()

    useGSAP(() => {
        gsap.from(foregroundRef.current, {
            y: -80,
            scrollTrigger: {
                ease: "power3.in",
                trigger: sectionRef.current,
                start: "top+=400lvh bottom",
                end: "bottom bottom",
                scrub: true
            }
        });

        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "bottom bottom",
              scrub: true,
              pin: true,
              anticipatePin: 0.5,
            }
          });
          
          tl
            .to({}, { duration: 2 })
            .from(textBackgroundRef.current, { opacity: 0, scale: 0, duration: 1 })
            .from(textRef.current, { opacity: 0 }, "-=0.15")
            .to({}, { duration: 3 })
            .to(textOneRef.current, { opacity: 0, y: -20, duration: 1 })
            .from(textTwoRef.current, { opacity: 0, y: 20, duration: 1 })
            .to({}, { duration: 2 });
    }, {scope: sectionRef})

    return (
        <div ref={sectionRef} className='relative w-screen h-lvh bg-cover xl:bg-center bg-no-repeat bg-[url("/images/kitchen_background.png")]'>
            <div className='absolute w-full h-full pointer-events-none
            bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(17,17,17,0.2)_90%,rgba(17,17,17,0.6)_100%)] z-10' />
            <div ref={foregroundRef} className="absolute w-full h-full bg-cover xl:bg-center bg-no-repeat bg-[url('/images/kitchen_foreground.png')]" />
            <div ref={textBackgroundRef} className='absolute absolute-center h-48 w-xs sm:w-4xl drop-shadow-2xl'>
                <div className='absolute absolute-center rounded-full w-full h-full bg-red-900/70 blur-xl' />
                <div ref={textRef} className='relative w-full h-full z-10 
                text-center text-shadow-light text-2xl md:text-4xl font-dosis-semibold text-yellow-300'>
                    <p ref={textOneRef} className='absolute absolute-center w-full'>
                        This film was inspired by my own experience celebrating Chinese New Year in Hong Kong!
                    </p>
                    <p ref={textTwoRef} className='absolute absolute-center w-full'>
                        Growing up with a big family, what I looked most forward to was always eating <span className='inline-block'>團年飯</span>&nbsp;
                        (Lunar New Year dinner) with my family and all the delicious dishes my mother would cook.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutTwo