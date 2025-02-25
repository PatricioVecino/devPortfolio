import React from "react";
import './ContactText.css'

export function ContactText({text,img}){
    const imageSrc=`/component-images/${img}`
    return(
        <div className="contact-text-container wow animate__animated animate__fadeInUp">
            <img className="contact-text-img" src={imageSrc} alt="imagen de contacto"/>
            <span className="contact-text-title">{text}</span>
        </div>
    )
}