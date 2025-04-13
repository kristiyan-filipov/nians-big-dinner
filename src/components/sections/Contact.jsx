import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const textRef = useRef(null)
  const backgroundRef = useRef(null)
  const foregroundRef = useRef(null)
  const sectionRef = useRef(null)
  const textOneRef = useRef()
  const textTwoRef = useRef()

  useGSAP(() => {

    gsap.from(foregroundRef.current, {
      y: -80,
      scrollTrigger: {
        ease: "power3.inOut",
        trigger: sectionRef.current,
        start: "top+=500lvh bottom",
        end: "+=300lvh",
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

      .to(backgroundRef.current, { opacity: 0.7, ease: "power2.inOut" }, 0.1)
      .from(textOneRef.current, { opacity: 0, y: 20, ease: "power2.out" }, "+=0.6")
      .from(textTwoRef.current, { opacity: 0, y: 20, ease: "power2.out" }, "+=0.6")
  }, { scope: sectionRef })

  return (
    <footer ref={sectionRef} className='relative w-screen h-lvh bg-cover bg-no-repeat bg-[linear-gradient(to_top,rgba(0,0,0,0)_0%,rgba(17,17,17,0.3)_90%,rgba(17,17,17,0.5)_100%),url("/images/living_room_background.png")]'>
      <div ref={foregroundRef} className="absolute w-full h-full bg-cover bg-no-repeat bg-[url('/images/living_room_foreground.png')]" />
      <div ref={backgroundRef} className='absolute inset-0 bg-black opacity-0' />
      <div ref={textRef} className='flex flex-col justify-center items-center gap-10 md:gap-20 w-full h-full font-dosis-regular text-lg lg:text-2xl xl:text-4xl  text-shadow-br-light text-white'>
        <div ref={textOneRef} className='text-center flex flex-col gap-10 w-[80%]'>
          <div className='font-dosis-semibold text-xl lg:text-2xl xl:text-5xl text-amber-400'>
            Hello!
          </div>
          <p>
            My name is Olivia and I’m a Visual Development and Background Artist currently
            working in the animation and games industry!
          </p>
          <p>
            I hope to combine my storytelling and
            illustrative abilities to create stunning environments that pique your interest to learn more about my worlds!
          </p>
        </div>
        <div ref={textTwoRef} className='flex flex-col gap-10 md:gap-0 md:flex-row w-full items-center justify-around'>
          <address className='flex flex-col not-italic gap-1 md:gap-4'>
            <div className='font-dosis-semibold text-xl lg:text-2xl xl:text-5xl text-amber-400 flex items-center gap-4'>
              <img src='./images/credits1.png' className='drop-shadow size-8 xl:size-16' />
              Personal contact info:
            </div>
            <div>
              &bull; Email :{" "}
              <a
                href="mailto:olivia.cywang@gmail.com"
                className="hover:text-amber-300"
              >
                olivia.cywang@gmail.com{" "}
                <span className='font-materialsymbols-regular align-middle'>outgoing_mail</span>
              </a>
            </div>

            <div>
              &bull; LinkedIn :{" "}
              <a
                href="https://ca.linkedin.com/in/whalesharkollie"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300"
              >
                Olivia Wang{" "}
                <span className='font-materialsymbols-regular align-middle'>open_in_new</span>
              </a>
            </div>
            <div>
              &bull; Instagram :{" "}
              <a
                href="https://www.instagram.com/whalesharkollie"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300"
              >
                whalesharkollie{" "}
                <span className='font-materialsymbols-regular align-middle'>open_in_new</span>
              </a>
            </div>
          </address>
          <div className='flex flex-col gap-1 md:gap-4'>
            <div className='font-dosis-semibold text-xl lg:text-2xl xl:text-5xl text-amber-400 flex items-center gap-4'>
              <img src='./images/credits2.png' className='drop-shadow size-8 xl:size-16' />
              Film Credits :
            </div>
            <div>&bull; Directed and Produced by : Olivia Wang </div>
            <div>&bull; Music Composed by : Benjamin Young </div>
            <div>
              &bull; Website created by : {" "}
              <a
                href="https://ca.linkedin.com/in/kristiyan-filipov"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300"
              >
                Kristiyan Filipov{" "}
                <span className='font-materialsymbols-regular align-middle'>open_in_new</span>
              </a> <br />
              (<a
                href="mailto:kristiyan.m.filipov@gmail.com"
                className="hover:text-amber-300"
              >
                kristiyan.m.filipov@gmail.com{" "}
                <span className='font-materialsymbols-regular align-middle'>outgoing_mail</span>
              </a>)
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Contact