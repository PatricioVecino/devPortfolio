import React from "react";
import './Btn.css' 

export function Btn({text, img}){
    const imageSrc=`src/assets/component-images/${img}`
    return(
        <button className='hero-btn'>{text}
        <img className='btn-img' src={imageSrc} alt="img-boton" />
        </button>
    )
}