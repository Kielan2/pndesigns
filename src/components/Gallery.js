import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);


const Gallery = () => {
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
        <section className="Gallery">
			<div className="Gallery-list">
				{Array.from({ length: 8 }).map((_, index) => (
						<img className="Gallery-img" key={index} src={`https://placehold.co/600x400?text=Image+${index + 1}`} alt={`Gallery Image ${index + 1}`} />
				))}
			</div>
			<div className="Gallery-content">
            <h2>Gallery</h2>
			<p>Welcome to our curated gallery, where every space tells a story. From timeless elegance to modern minimalism, each project showcases our dedication to detail and a deep understanding of color, texture, and form. Let your imagination roam as you explore these unique interiors, crafted to harmonize functionality with beauty. Discover how we transform rooms into reflections of individuality, creating environments that inspire, comfort, and delight.</p>
			</div>
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
        </section>
    );
};

export default Gallery;
