import React from "react";
import './MiniSection.css'

export function MiniSection({title,img,description}){
    const imageSrc=`src/assets/component-images/${img}`
    return(
        <div className="mini-section">
            <h4 className="mini-title"><img className="mini-img img-fluid" src={imageSrc} alt="logo-info"/> {title}</h4>
            <p className="mini-description">{description}</p>
        </div>
    )

}