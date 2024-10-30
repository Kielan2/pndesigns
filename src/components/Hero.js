import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
const h1Ref = useRef(null);

useEffect(() => {
	gsap.to(h1Ref.current, { 
		x: "100%",
	ease: "power1.out",
	opacity: 1,
	duration: 1
	});
}, []);

return (
	
		<h1 className="oswald-light" ref={h1Ref}>PN Designs</h1>
	
);
};

export default Hero;
