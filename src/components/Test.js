import React, { useState } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

const ScrollGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `https://placehold.co/600x400?text=Image+${i + 1}`,
    title: `Title ${i + 1}`,
    description: `Description for image ${i + 1}`,
  }));

  const openModal = (image) => {
    setSelectedImage(image);
    gsap.fromTo(
      ".modal-content",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  };

  const closeModal = () => {
    gsap.to(".modal-content", {
      opacity: 0,
      y: -50,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setSelectedImage(null),
    });
  };

  return (
    <div className="gallery">
      {images.map((image) => (
        <div
          key={image.id}
          className="gallery-item"
          onClick={() => openModal(image)}
        >
          <img src={image.src} alt={`Image ${image.id}`} />
        </div>
      ))}

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div className="modal-text">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
            </div>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollGallery;
