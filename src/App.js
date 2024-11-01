import React from "react";
//import HorizontalScroll from "./components/HorizontalScroll"; // Adjusted import path
import Hero from "./components/Hero"; // Adjusted import path
import About from "./components/About"; // Adjusted import path
import Gallery from "./components/Gallery"; // Adjusted import path
import federicaPic from "./images/federica-giusti-V0eu8HF_URU-unsplash.jpg";
import stephanPic from "./images/stephan-louis-vLE8zGehHwU-unsplash.jpg";
import deskPic from "./images/pexels-seven11nash-380769.jpg";

// document.addEventListener('scroll', () => {
//   const logo = document.querySelector('.Logo');
//   const currentBackground = window.getComputedStyle(document.body).backgroundColor;

//   // Adjust colors based on the background (simplified example)
//   if (currentBackground === '#1b1c1e') { // Black background
//     logo.style.setProperty('--logo-color', 'red');
//   } else {
//     logo.style.setProperty('--logo-color', 'ghostwhite');
//   }
// });


function App() {
  return <div className="App">
      <span className="Logo">pn designs</span>
    <section className="Hero">
      <div className="Hero_pics">
      <img src={federicaPic} alt="Federica Giusti" />
      <img src={stephanPic} alt="Stephan Louis" />
      <img src={deskPic} alt="Man working at desk" />
      </div>
   <Hero />
    </section>
    <About />
    <Gallery />
  </div>;
}

export default App;
