import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import designVid from "../images/design-vid-2.mp4";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutContent = useRef(null);
    const aboutHeader = useRef(null);

    // Scramble text effect function
    function scrambleText(element, finalText, interval = 50, revealSpeed = 1000) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let iterations = Math.ceil(revealSpeed / interval);
        let counter = 0;

        const scramble = setInterval(() => {
            const scrambledText = finalText.split("").map((char, i) => {
                return Math.random() > counter / iterations ? chars[Math.floor(Math.random() * chars.length)] : char;
            }).join("");

            element.textContent = scrambledText; // Set the text content correctly
            counter++;

            if (counter >= iterations) {
                clearInterval(scramble);
                element.textContent = finalText;
            }
        }, interval);
    }

    useEffect(() => {
        // GSAP animation with ScrollTrigger
        gsap.fromTo(
            aboutContent.current, 
            { x: "-100%", opacity: 0 }, 
            { 
                x: "0%", 
                ease: "power1.out", 
                opacity: 1, 
                duration: 1,
                scrollTrigger: {
                    trigger: aboutContent.current,
                    start: "top 90%", // Starts animation when element is 75% into the viewport
                    end: "top 25%", // Optional: animation range (can remove if not needed)
                    scrub: true,
                    onEnter: () => scrambleText(aboutHeader.current, "About") // Start scramble effect on enter
                }
            }
        );
    }, []);

    return (
        <section className="About">
            <div className="About-content" ref={aboutContent}>
                <h2 ref={aboutHeader}>About</h2>
                <p>
                    As an experienced interior designer, I am passionate about transforming spaces into reflections of my clients’ unique styles and needs. With a keen eye for detail and a strong foundation in design principles, I bring functionality and beauty into every project, whether it’s a cozy home renovation or a large-scale commercial transformation. My approach is rooted in collaboration and adaptability, ensuring each design not only enhances the space but also aligns perfectly with my clients’ lifestyles. From concept development to the final reveal, I aim to create environments that inspire, comfort, and elevate.
                </p>
            </div>
            <div className="Video">
                <video width="320" height="240" autoPlay loop muted>
                    <source src={designVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default About;
