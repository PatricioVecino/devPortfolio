import React from "react";
import './Card.css'

export function Card({title,img,description,techs,repoLink}){
    const imageSrc=`src/assets/component-images/${img}`
    const techIcons = techs ? 
    (techs.includes(", ") ? 
      techs.split(", ").map(tech => tech.trim()) : 
      techs.split(",").map(tech => tech.trim())) : 
    [];

    return(
        <div className="card-container container">
            <img className="card-img img-fluid" src={imageSrc} alt="imagen del proyecto"/>
            <h4 className="card-title">{title}</h4>
            <p className="card-description">{description}</p>
            <section className="card-techs">
                {techIcons.map((tech, index) => (
                <img
                    key={index}
                    src={`/src/assets/component-images/techs/${tech}`}
                    alt={tech.replace('.svg', '')}
                    className="tech-icon"
                />
                ))}
            </section>
        </div>
    )
}