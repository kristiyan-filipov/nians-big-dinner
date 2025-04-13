import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const ConceptArtThree = () => {
    const containerRef = useRef(null)
    const sectionRef = useRef(null)

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
        })
    }, {scope: sectionRef})

    return (
        <div ref={sectionRef} className='w-screen h-lvh relative bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(17,17,17,0.4)_90%,rgba(17,17,17,0.6)_100%),url("/images/red_background.png")]'>
            <div className='absolute top-5 lg:top-2 text-glow text-6xl lg:text-8xl text-center overflow-show w-fit h-fit text-white absolute-center-w font-dosis-semibold z-40'>
                <div className='absolute w-full h-full lg:p-8 lg:px-12 bg-red-950/80 rounded-full blur-2xl lg:blur-2xl z-10' />
                <span className='relative z-20'>Character art</span>
            </div>

            <div ref={containerRef} className='flex flex-col justify-center items-center h-full w-full overflow-hidden'>
                <img src='./images/character_art.png' className=' max-h-full py-[3%]' />
            </div>

        </div>
    )
}

export default ConceptArtThree