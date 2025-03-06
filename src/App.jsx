import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Btn } from "./components/btn/Btn";
import { MiniSection } from "./components/miniSection/MiniSection";
import { Card } from "./components/card/Card";
import { MiniCard } from "./components/miniCard/MiniCard";
import { ContactText } from "./components/contactText/ContactText";

function App() {
  return (
    <>
      <Navbar />
      <div className="hero-section container">
        <h2 className="hero-title text-center wow animate__animated animate__pulse">
          Desarrollador Full Stack
        </h2>
        <p className="hero-subtitle text-center animate__animated animate__pulse">
          Construyo aplicaciones web, enfocadas en rendimiento y escalabilidad.
        </p>
        <a href="#Proyectos">
          <Btn text="Ver Portfolio" img="arrow-down.svg" />
        </a>
      </div>
      <div id="about" className="about-section container ">
        <div className="row">
          <div className="about-container-photo col-md-4 wow animate__animated animate__fadeInLeft">
            <img
              className="about-photo"
              src="/about-photo.jpeg"
              alt="foto de perfil"
            />
          </div>
          <div
            id="SobreMi"
            className="about-container-text col-md-8 wow animate__animated animate__fadeInRight"
          >
            <p className="about-text">
              Soy un <span className="about-text-color">desarrollador web</span>{" "}
              apasionado por crear aplicaciones digitales de alto impacto. Mi
              enfoque combina conocimientos técnicos sólidos con una visión
              orientada a resultados.
            </p>
            <section className="about-info">
              <MiniSection
                title="Educacion"
                img="graduation.svg"
                description="Actual estudiante de la Licenciatura en Sistemas, en la Universidad Argentina de la Empresa (UADE)."
              />
              <MiniSection
                title="Experiencia"
                img="eye.svg"
                description="Cofundador de startup premiada y desarrollador en empresas del sector inmobiliario."
              />
              <MiniSection
                title="Habilidades"
                img="outline.svg"
                description="Desarrollo Frontend y Backend, en las tecnologias detalladas en la seccion de proyectos."
              />
              <MiniSection
                title="Idiomas"
                img="traductor.svg"
                description="Español (nativo), Inglés (intermedio-avanzado) con certificación First Certificate in English."
              />
            </section>
            <a href="/public/CV Patricio Vecino.pdf" download>
              <Btn text="Descargar CV" img="download.svg" />
            </a>
          </div>
        </div>
      </div>
      <div id="portfolio" className="portfolio-section container">
        <h4 id="Proyectos" className="portfolio-section-title">
          Proyectos Propios y Colaborativos
        </h4>
        <section className="portfolio-cards">
          <Card
            title="Stockflow"
            img="stockflow.png"
            description="Creación de Webapp para locales de gastronomía."
            techs="Flask, SQLAlchemy, FastAPI"
            repoLink="https://github.com/juanmatarga/Stockflow"
          />
          <Card
            title="Julio Vecino Propiedades"
            img="juliovecino.jpg"
            description="Página web para inmobiliaria."
            techs="Bootstrap, JavaScript, JSON"
            repoLink="https://github.com/PatricioVecino/JulioVecinoPropiedades"
          />
          <Card
            title="Migliorisi Propiedades"
            img="migliorisi.svg"
            description="Creación de funcionalidades en aplicación web."
            techs="C#, JavaScript, .NET"
          />
        </section>
      </div>
      <div id="skills" className="skills-section container">
        <h4 id="Habilidades" className="skills-title">
          Más Habilidades...
        </h4>
        <section className="skills-section-cards">
          <MiniCard title="MongoDB" />
          <MiniCard title="Express" />
          <MiniCard title="React" />
          <MiniCard title="Node.js" />
          <MiniCard title="Java" />
          <MiniCard title="Python" />
          <MiniCard title="Git" />
          <MiniCard title="Webflow" />
        </section>
      </div>
      <div id="contact" className="contact-section container">
        <h4 id="Contacto" className="contact-title">
          Contacto
        </h4>
        <div className="row">
          <div className="contact-data col-md-6">
            <p className="contact-subtitle">
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
            <section className="contact-texts">
              <ContactText
                text="patriciogabrielvecino@gmail.com"
                img="mail.svg"
              />
              <ContactText text="patriciogabrielvecino" img="in.png" />
              <ContactText text="Buenos Aires, Argentina" img="location.svg" />
            </section>
          </div>
          <div className="contact-form col-md-6 wow animate__animated animate__fadeInUp">
            <form action="https://formspree.io/f/xwplevkl" method="POST">
              <div className="form-group">
                <input
                  className="form-control shadow"
                  id="nameInput"
                  type="text"
                  name="name"
                  placeholder="Tu nombre..."
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control shadow"
                  id="mailInput"
                  type="email"
                  name="email"
                  placeholder="Tu mail..."
                  required
                />
              </div>
              <textarea
                className="form-control shadow"
                id="msgInput"
                cols="80"
                rows="3"
                name="message"
                placeholder="Mensaje"
                required
              ></textarea>
              <Btn text="Enviar Mensaje" img="send.svg" />
            </form>
          </div>
        </div>
      </div>

      <footer className="footer-container">
        <footer className="container text-center">
          <span>© 2025 Patricio Vecino. Todos los derechos reservados.</span>
        </footer>
      </footer>
    </>
  );
}

export default App;
