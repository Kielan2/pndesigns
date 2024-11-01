import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ReactComponent as LineSVG } from "../images/3226791_43475.svg";

const Hero = () => {
    const h1Ref = useRef(null);
    const svgRef = useRef(null);

    useEffect(() => {
        // Initial GSAP animation for the h1 element
        gsap.to(h1Ref.current, {
            x: "100%",
            ease: "power1.out",
            opacity: 1,
            duration: 1
        });

        // Select the path element inside the SVG
        const path = svgRef.current.querySelector("path");

        // Get the length of the path
        const pathLength = path.getTotalLength();

        // Set up initial styles for the path to make it hidden
        gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
        });

        // Animate the strokeDashoffset to reveal the path from top to bottom
        gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power1.out"
        });
    }, []);

    return (
        <div>
            <LineSVG ref={svgRef} className="LineSvg"/>
            <h1 className="oswald-light" ref={h1Ref}>
                PN Designs
            </h1>
        </div>
    );
};

export default Hero;
