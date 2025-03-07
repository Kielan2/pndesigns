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
                Peyton began her career journey at Root'd as an intern in 2021, ignited by her passion for interior design nurtured at Anderson University, where she earned a Bachelor's degree in the field.  She is proficient in 3D renderings and computer-aided design, earning recognition from prestigious competitions like Kravet and IDEC Honors.
                </p>
                <p>
                During her three years at Root'd, Peyton has transitioned from supporting roles to lead designer. She has a deep love for millwork, lighting, and textile design, infusing spaces with rich jewel tones and eclectic elements to create environments that energize the senses. More than anything, Peyton is passionate about the transformative power of design and is an advocate for manifesting a client's vision in every project.
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
