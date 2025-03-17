import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Marks from "./Marks";
// import img from "./assets/front-left-side-47.jpg";
// import img2 from "./assets/62257b72cd364fa4a1e0ab449eadaccac6a14225156f2d23d04ee99f6f9efff1.avif";
import img from "./assets/images.jpeg";
import img2 from "./assets/Apple_16-inch_MacBook_Pro_rend.avif";
import img3 from "./assets/images (1).jpeg";

function App() {
  return (
    <div className="main">
      <Marks name="Black Canon" image={img} price={49000} />
      <Marks name="MacBook Pro" image={img3} price={149000} />
      <Marks name="MacBook Pro" image={img2} price={149000} />
      <Marks name="MacBook Pro" image={img3} price={149000} />
      <Marks name="MacBook Pro" image={img2} price={149000} />{" "}
      <Marks name="MacBook Pro" image={img2} price={149000} />{" "}
      <Marks name="MacBook Pro" image={img3} price={149000} />
    </div>
  );
}

export default App;
