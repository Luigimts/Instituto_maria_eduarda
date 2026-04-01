import { useState, useEffect } from "react";
import "./Hero.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const images = [img1, img2, img3]

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={index === current ? "active" : ""}
          />
        ))}
      </div>

      <div className="hero-content">
        <h1>Transformando vidas através do esporte</h1>
        <p>Educação, disciplina e esperança para jovens</p>
      </div>
    </section>
  );
};

export default Hero;