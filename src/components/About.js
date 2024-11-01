import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import designVid from "../images/design-vid-2.mp4";


const About = () => {
    const aboutContent = useRef(null);

    useEffect(() => {
        // Initial GSAP animation
		gsap.fromTo(aboutContent.current, 
			{ x: "-100%", opacity: 0 }, 
			{ x: "0%", ease: "power1.out", opacity: 1, duration: 1 }
		);
    }, []);

    return (
        <section className="About">
      <div className="About-content" ref={aboutContent}>
      <h2>About</h2>
      <p>
As an experienced interior designer, I am passionate about transforming spaces into reflections of my clients’ unique styles and needs. With a keen eye for detail and a strong foundation in design principles, I bring functionality and beauty into every project, whether it’s a cozy home renovation or a large-scale commercial transformation. My approach is rooted in collaboration and adaptability, ensuring each design not only enhances the space but also aligns perfectly with my clients’ lifestyles. From concept development to the final reveal, I aim to create environments that inspire, comfort, and elevate.</p>
      </div>
      <div className="Video">
      <video width="320" height="240" autoPlay loop>
        <source src={designVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      </section>
    );
};

export default About;

