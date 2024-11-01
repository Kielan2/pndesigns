import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    return (
        <section className="Gallery">
            <h2>Gallery</h2>
			<p>Welcome to our curated gallery, where every space tells a story. From timeless elegance to modern minimalism, each project showcases our dedication to detail and a deep understanding of color, texture, and form. Let your imagination roam as you explore these unique interiors, crafted to harmonize functionality with beauty. Discover how we transform rooms into reflections of individuality, creating environments that inspire, comfort, and delight.</p>
        </section>
    );
};

export default About;
