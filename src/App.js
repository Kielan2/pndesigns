import React from "react";
//import HorizontalScroll from "./components/HorizontalScroll"; // Adjusted import path
import Hero from "./components/Hero"; // Adjusted import path
import federicaPic from "./images/federica-giusti-V0eu8HF_URU-unsplash.jpg";
import stephanPic from "./images/stephan-louis-vLE8zGehHwU-unsplash.jpg";
import deskPic from "./images/pexels-seven11nash-380769.jpg";


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
  </div>;
}

export default App;
