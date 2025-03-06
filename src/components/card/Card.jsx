import React from "react";
import "./Card.css";
import { Holder } from "../holder/Holder.jsx";
import "../holder/Holder.css";

export function Card({ title, img, description, techs, repoLink }) {
  const imageSrc = `/component-images/${img}`;
  const techIcons = techs.split(", ");

  return (
    <div className="card-container container shadow wow animate__animated animate__fadeInUp">
      <img
        className="card-img img-fluid p-4"
        src={imageSrc}
        alt="imagen del proyecto"
      />
      <h4 className="card-title">{title}</h4>
      <p className="card-description">{description}</p>
      <section className="card-techs">
        {techIcons.map((tech, index) => (
          <div className="holder-container shadow-sm" key={index}>
            <Holder key={index} tech={tech} />
          </div>
        ))}
      </section>
    </div>
  );
}
