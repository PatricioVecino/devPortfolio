import React from "react";
import "./TickCard.css";

export function TickCard({ description }) {
  return (
    <div className="caracteristica-item">
      <div className="check-icon">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="20,6 9,17 4,12"></polyline>
        </svg>
      </div>
      <p className="caracteristica-text">{description}</p>
    </div>
  );
}
