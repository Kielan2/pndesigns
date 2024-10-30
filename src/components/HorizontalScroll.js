import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const images = [
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
  ];

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    const duration = 3; // Duration for each image to slide in
    tl.fromTo(
      images.map((_, index) => `.image-${index}`),
      { x: "100%", opacity: 0 },
      { x: "0%", opacity: 1, duration, ease: "power2.inOut", stagger: 0.5 }
    ).to(
      images.map((_, index) => `.image-${index}`),
      { x: "-100%", duration, ease: "power2.inOut", stagger: 0.5 }
    );
  }, [images]);

  return (
    <div className="overflow-hidden h-screen flex items-center justify-center">
      <div ref={containerRef} className="flex whitespace-nowrap">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-${index} flex-shrink-0 w-full h-full`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
