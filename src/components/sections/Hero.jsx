import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Tilt from '../ui/Tilt';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const imageRef = useRef(null);
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);


  const handleImageClick = () => {
    setIsImageClicked(true);
  };

  useGSAP(() => {
    if (isImageClicked) {
      const tl = gsap.timeline({
        onComplete: () => {
          // Set the clipPath and borderRadius values after scrolling
          gsap.set(videoContainerRef.current, {
            clipPath: 'polygon(31% 0, 92% 0, 86% 96%, 8% 76%)',
            borderRadius: '0 0 70% 40%'
          });
          // Set the clipPath and borderRadius values before scrolling
          gsap.from(videoContainerRef.current, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
              trigger: videoContainerRef.current,
              start: 'center center',
              end: 'bottom center',
              scrub: true
            }
          });
          setIsVideoOpen(true);
        }
      });
      // Animate the image out and the video in
      tl.to(imageRef.current, {
        scale: 0,
        duration: 0.6,
        ease: 'power3.in'
      })
        .to(videoContainerRef.current, {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.1');
    }
  }, [isImageClicked]);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const toggleVolume = () => {
    if (!videoRef.current) return;
    if (videoRef.current.muted) {
      videoRef.current.muted = false;
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div id='hero-section' className='relative h-lvh w-screen overflow-x-hidden bg-repeat select-none overflow-hidden
      bg-[linear-gradient(to_top,rgba(0,0,0,0)_0%,rgba(17,17,17,0.35)_90%,rgba(17,17,17,0.65)_100%),url("/images/red_background.png")]'>
      <div ref={videoContainerRef} className='absolute w-full h-lvh overflow-hidden clip-path-hidden z-10'>
        <div className='absolute pointer-events-none top-0 left-0 w-full h-lvh 
          bg-[linear-gradient(to_top,rgba(0,0,0,0)_0%,rgba(17,17,17,0.4)_90%,rgba(17,17,17,0.7)_100%)]' />
        <video
          ref={videoRef}
          onClick={() => window.getSelection().removeAllRanges()}
          className='w-full h-lvh object-cover'
          autoPlay
          playsInline
          muted
          loop
          src='./videos/film.mp4'
        />
        <div className='absolute bottom-1 left-4 flex font-materialsymbols-regular text-white drop-shadow-br text-6xl z-20'>
          <button onClick={toggleVideo} className=' m-4 cursor-pointer transition-transform duration-150 active:scale-90'>
            {isVideoPlaying ? 'pause' : 'play_arrow'}
          </button>
          <button onClick={toggleVolume} className='m-4 cursor-pointer transition-transform duration-150 active:scale-90'>
            {isMuted ? 'volume_off' : 'volume_up'}
          </button>
        </div>
        <h1 className=' text-[2rem] sm:text-6xl md:text-7xl lg:text-[5rem] select-text
            absolute bottom-5 right-4.5 sm:right-6 text-shadow-br text-center text-white'>
          <div className='font-dosis-bold mb-3'>Nian's Big Dinner</div><div className='font-lxgwwenkaitc-bold'>年夜飯</div>
        </h1>
      </div>
      {/* Only show after the video animation finishes */}
      {isVideoOpen && (
        <div className='text-[2rem] sm:text-6xl md:text-7xl lg:text-[5rem] select-text
            absolute bottom-5 right-4.5 sm:right-6 text-shadow-br text-center text-yellow-300'>
          <span><div className='font-dosis-bold mb-3'>Nian's Big Dinner</div><div className='font-lxgwwenkaitc-bold'>年夜飯</div></span>
        </div>
      )}
      <div
        className={`absolute text-yellow-300 text-shadow-br font-dosis-regular text-xl 
          top-[calc(50%-13rem)] absolute-center-w mb-3 ${!isVideoOpen ? 'animate-bounce' : ''}`}
      >
        Click to open!
      </div>
      <Tilt className='w-[10rem] h-[20rem] rounded-md drop-shadow-2xl cursor-pointer absolute absolute-center'>
        <img
          ref={imageRef}
          onClick={handleImageClick}
          src='./images/red_packet.png'
          alt='Envelope'
        />
      </Tilt>
    </div>
  );
};

export default Hero;
