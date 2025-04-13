import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ConceptArt = () => {
    const sectionRef = useRef(null);
    const bg2Ref = useRef(null);
    const bg3Ref = useRef(null);
    const bg4Ref = useRef(null);
    const bg5Ref = useRef(null);

    const layers = [
        { ref: bg2Ref, y: "-10%", start: "12%", end: "80%", ease: "power2.out" },
        { ref: bg3Ref, y: "-10%",  start: "28%",  end: "45%", ease: "power2.in" },
        { ref: bg4Ref, y: "-20%",  start: "40%", end: "115%" },
        { ref: bg5Ref, y: "-23%",  start: "60%", end: "65%" },
    ];

    useGSAP(() => {
        layers.forEach(({ ref, y, start, end, ease }) => {
            gsap.from(ref.current, {
                y: y,
                ease: ease || "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: `top+=${start} bottom`,
                    end: `+=${end}`,
                    scrub: true,
                },
            });
        });
    }, {scope: sectionRef});

    return (
        <div ref={sectionRef} className="relative w-screen h-[350lvh] overflow-hidden bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(17,17,17,0.6)_90%,rgba(17,17,17,0.6)_100%),url('/images/red_background.png')]">
            <h2 className="absolute absolute-center-w text-center text-7xl md:text-9xl text-glow-gold text-white top-24 font-dosis-semibold z-50">
                Concept art
            </h2>
            <div  className="absolute inset-0 flex justify-center z-0">
                <img
                    src="./images/long_background/long_background.png"
                    className="h-full w-auto object-cover object-center"
                />
            </div>
            <div  className="absolute inset-0 flex justify-center z-30">
                <img
                    src="./images/long_background/long_background1.png"
                    className="h-full w-auto object-cover object-center"
                />
            </div>
            <div ref={bg2Ref} className="absolute inset-0 flex justify-center z-20">
                <img
                    src="./images/long_background/long_background2.png"
                    className="h-full w-auto object-cover object-center"
                />
            </div>
            <div ref={bg3Ref} className="absolute inset-0 flex justify-center z-20">
                <img
                    src="./images/long_background/long_background3.png"
                    className="h-full w-auto object-cover object-center"
                />
            </div>
            <div ref={bg4Ref} className="absolute inset-0 flex justify-center z-10">
                <img
                    src="./images/long_background/long_background4.png"
                    className="h-full w-auto object-cover object-center"
                />
            </div>
            <div ref={bg5Ref} className="absolute inset-0 flex justify-center z-10">
                <img
                    src="./images/long_background/long_background5.png"
                    className="h-full w-auto object-cover object-center"
                />
            </div>
        </div>
    );
};



export default ConceptArt;
