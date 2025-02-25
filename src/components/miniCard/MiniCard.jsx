import React from "react";
import './MiniCard.css'

export function MiniCard({title}){
    return(
        <div className="mini-card-container wow animate__animated animate__fadeInUp">
            <span className="mini-card-title">{title}</span>
        </div>
    )
}