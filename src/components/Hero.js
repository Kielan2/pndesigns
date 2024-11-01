import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
    const h1Ref = useRef(null);

    // Scramble text effect for exact length
    function scrambleText(element, finalText, interval = 50, revealSpeed = 1000) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let iterations = Math.ceil(revealSpeed / interval);
        let counter = 0;

        const scramble = setInterval(() => {
            const scrambledText = finalText.split("").map((char, i) => {
                return Math.random() > counter / iterations ? chars[Math.floor(Math.random() * chars.length)] : char;
            }).join("");

            element.textContent = scrambledText;
            counter++;

            if (counter >= iterations) {
                clearInterval(scramble);
                element.textContent = finalText;
            }
        }, interval);
    }

    useEffect(() => {
        // Initial GSAP animation
        gsap.to(h1Ref.current, { 
            x: "100%",
            ease: "power1.out",
            opacity: 1,
            duration: 1,
            onComplete: () => {
                // Start scramble effect after GSAP animation completes
                scrambleText(h1Ref.current, "PN Designs");
            }
        });
    }, []);

    return React.createElement(
        "h1",
        { className: "oswald-light", ref: h1Ref },
        "PN Designs"
    );
};

export default Hero;
