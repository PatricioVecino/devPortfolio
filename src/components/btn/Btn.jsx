import React from "react";
import "./Btn.css";

export function Btn({ text, img }) {
  const imageSrc = `/component-images/${img}`;
  return (
    <button type="submit" className="hero-btn">
      {text}
      <img className="btn-img" src={imageSrc} alt="img-boton" />
    </button>
  );
}
