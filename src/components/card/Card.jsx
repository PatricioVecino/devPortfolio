import React from "react";
import "./Card.css";
import { Holder } from "../holder/Holder.jsx";

export function Card({
  title,
  img,
  description,
  techs,
  onCardClick,
  dataProject,
}) {
  const imageSrc = `/component-images/${img}`;
  const techIcons = techs.split(", ");

  const completeData = {
    title,
    description,
    techs,
    dataProject,
  };

  return (
    <>
      <div
        className="card-container container shadow wow animate__animated animate__fadeInUp"
        onClick={() => onCardClick(completeData)}
      >
        <img
          className="card-img img-fluid p-4"
          src={imageSrc}
          alt="imagen del proyecto"
        />
        <section className="card-techs">
          {techIcons.map((tech, index) => (
            <div className="holder-container shadow-sm" key={index}>
              <Holder key={index} tech={tech} />
            </div>
          ))}
        </section>
        <p className="card-description">{dataProject.large_description}</p>
        <button
          className="card-button"
          onClick={() => onCardClick(completeData)}
        >
          Acerca del proyecto
        </button>
      </div>
    </>
  );
}
