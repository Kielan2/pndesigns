// FlipGallery.jsx
import React, { useState } from 'react';
import { gsap } from 'gsap';

const images = [
  'https://via.placeholder.com/150/FF5733/FFFFFF?text=Image+1',
  'https://via.placeholder.com/150/33FF57/FFFFFF?text=Image+2',
  'https://via.placeholder.com/150/3357FF/FFFFFF?text=Image+3',
  'https://via.placeholder.com/150/FF33A8/FFFFFF?text=Image+4',
];

const getRandomDirection = () => {
  const directions = ['top', 'bottom', 'left', 'right'];
  return directions[Math.floor(Math.random() * directions.length)];
};

const FlipGallery = () => {
  const [showImages, setShowImages] = useState(false);

  const handleClick = () => {
    setShowImages(true);
    
    const tl = gsap.timeline();
    images.forEach((_, index) => {
      const direction = getRandomDirection();
      const offset = direction === 'top' || direction === 'bottom' ? 100 : 100;
      const rotationY = direction === 'left' || direction === 'right' ? 90 : 0;
      const yOffset = direction === 'top' ? -offset : direction === 'bottom' ? offset : 0;
      const xOffset = direction === 'left' ? -offset : direction === 'right' ? offset : 0;

      tl.fromTo(
        `.image-${index}`,
        {
          x: xOffset,
          y: yOffset,
          opacity: 0,
          rotationY,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.2,
        }
      );
    });
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <button onClick={handleClick}>See Pictures</button>
      <div className="gallery" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
        {showImages && images.map((src, index) => (
          <div className="image-container" key={index} style={{ perspective: '1000px', margin: '10px' }}>
            <div
              className={`image image-${index}`} 
              style={{
                width: '150px', 
                height: '150px', 
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
              }}
            >
              <img src={src} alt={`Image ${index + 1}`} style={{
                width: '100%', 
                height: '100%', 
                borderRadius: '10px',
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlipGallery;
