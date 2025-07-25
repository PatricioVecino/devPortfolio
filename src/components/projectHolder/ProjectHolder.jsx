import React from "react";
import "./ProjectHolder.css";
import { MiniSection } from "../miniSection/MiniSection";
import { TickCard } from "../tickCard/TickCard";
import { Btn } from "../btn/Btn";

export function ProjectHolder({ completeData, onClose }) {
  return (
    <div className="project-holder-overlay" onClick={onClose}>
      <div
        className="project-holder-content modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2 className="modal-title">{completeData.title}</h2>
          <p className="modal-subtitle text-muted">
            {completeData.description}
          </p>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
        <div className="modal-body">
          <section className="modal-description">
            <h3 className="modal-body-title">Descripción General</h3>
            <p>{completeData.dataProject.large_description}</p>
          </section>
          <div className="modal-grid-container">
            <section className="modal-body-row-features">
              <h3 className="modal-body-title">
                Características Implementadas
              </h3>
              <div className="modal-body-row-features-container">
                {completeData.dataProject.features.map((feature, index) => (
                  <TickCard key={index} description={feature} />
                ))}
              </div>
            </section>
            <div className="modal-body-right-column">
              <section className="modal-body-row-info">
                <MiniSection
                  title="Duración"
                  description={completeData.dataProject.duration}
                  img="clock.svg"
                />
                <MiniSection
                  title="Rol"
                  description={completeData.dataProject.role}
                  img="user.svg"
                />
                <MiniSection
                  title="Tipo"
                  description={completeData.dataProject.type}
                  img="wrench.svg"
                />
              </section>
              {completeData.dataProject.link && (
                <div className="project-link-container">
                  <button
                    className="project-link-button"
                    onClick={() =>
                      window.open(completeData.dataProject.link, "_blank")
                    }
                  >
                    Ver Proyecto
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
}
