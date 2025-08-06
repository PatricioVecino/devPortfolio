import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Btn } from "./components/btn/Btn";
import { MiniSection } from "./components/miniSection/MiniSection";
import { Card } from "./components/card/Card";
import { MiniCard } from "./components/miniCard/MiniCard";
import { ContactText } from "./components/contactText/ContactText";
import { ProjectHolder } from "./components/projectHolder/ProjectHolder";
import { Title } from "./components/title/Title";

function App() {
  const [showProjectHolder, setShowProjectHolder] = useState(null);

  const handleCardClick = (projectData) => {
    setShowProjectHolder(projectData);
  };

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
        <a href="#portfolio">
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
                className="experience-highlight-subtle"
              />
              <MiniSection
                title="Experiencia"
                img="eye.svg"
                description="Cofundador de startup premiada y desarrollador en empresas del sector inmobiliario."
                className="experience-highlight"
              />
              <MiniSection
                title="Habilidades"
                img="outline.svg"
                description="Desarrollo Frontend y Backend. Interesado en IA y Data Science."
                className="experience-highlight-subtle"
              />
              <MiniSection
                title="Idiomas"
                img="traductor.svg"
                description="Español (nativo), Inglés (intermedio-avanzado) con certificación First Certificate in English."
                className="experience-highlight-subtle"
              />
            </section>
            <section className="download-cv-btn">
              <a href="/CV Patricio Vecino.pdf" target="_blank">
                <Btn text="Descargar CV" img="download.svg" />
              </a>
            </section>
          </div>
        </div>
      </div>
      <div id="portfolio" className="portfolio-section container">
        <Title
          title="Proyectos Propios y Colaborativos"
          subtitle="Desde startups hasta empresas."
        />
        <section className="portfolio-cards">
          <Card
            title="Stockflow"
            img="stockflow.png"
            description="Creación de Webapp para locales de gastronomía."
            techs="Flask, SQLAlchemy, FastAPI"
            onCardClick={handleCardClick}
            dataProject={{
              large_description:
                "Stockflow es una aplicación web diseñada específicamente para locales gastronómicos. El sistema permite una gestión integral del negocio, brindándole un copiloto a los encargados dentro de los locales. Fue desarrollada con un enfoque en la usabilidad y la eficiencia, proporcionando dashboards intuitivos que permiten a los propietarios tomar decisiones informadas sobre su negocio.",

              duration: "Actualidad",

              role: "Desarrollador Full Stack",

              type: "Startup",

              features: [
                "Creación de una API para la gestión integral de un local gastronómico.",
                "Implementación de recetas con lógica recursiva para registrar correctamente el consumo de productos y materias primas.",
                "Desarrollo de dashboards para la gestión de inventario y desperdicios.",
                "Gestión centralizada de proveedores.",
                "Cálculo de desperdicios mediante la comparación entre el stock físico y el stock teórico.",
              ],
            }}
          />
          <Card
            title="Julio Vecino Propiedades"
            img="juliovecino.jpg"
            description="CM y Página web para inmobiliaria."
            techs="Bootstrap, JavaScript, JSON"
            onCardClick={handleCardClick}
            dataProject={{
              large_description:
                "Aproveché mi aprendizaje a lo largo de estos años para crearle una página web a la inmobiliaria familiar y adaptar sus redes sociales, con el fin de que pueda tener una presencia online y que los clientes logren contacto de manera fácil y rápida.",

              duration: "6 meses",

              role: "Community Manager y Desarrollador",

              type: "Negocio Familiar",

              features: [
                "Creación de una página web para el negocio de mi padre.",
                "Adaptación de sus redes sociales para establecer una presencia online sólida.",
                "Facilitación en la gestión de propiedades mediante herramientas digitales.",
                "Priorización del contacto directo con los clientes a través de formularios y medios de contacto accesibles.",
              ],

              link: "https://juliovecino.com.ar",
            }}
          />
          <Card
            title="Migliorisi Propiedades"
            img="migliorisi.svg"
            description="Creación de funcionalidades en aplicación web."
            techs="C#, JavaScript, .NET"
            onCardClick={handleCardClick}
            dataProject={{
              large_description:
                "Migliorisi Propiedades es una red de inmobiliarias dedicada a la venta y alquiler de propiedades. En esta oportunidad, se me encomendó el desarrollo de requerimientos funcionales en su aplicación web.",

              duration: "Actualidad",

              role: "Desarrollador Jr.",

              type: "Experiencia Laboral",

              features: [
                "Desarrollo de nuevas funcionalidades en la aplicación web de Migliorisi Propiedades.",
                "Implementación de un historial de vistas.",
                "Implementación de un sistema de pedidos de propiedades según las preferencias del usuario.",
                "Mantenimiento y mejora continua de la aplicación web.",
              ],
            }}
          />
          <Card
            title="LiftClub"
            img="liftclub.png"
            description="Red Social para entrenadores y clientes."
            techs="React, Node.js, MongoDB"
            onCardClick={handleCardClick}
            dataProject={{
              large_description:
                "LiftClub es una red social orientada a entrenadores y clientes de gimnasios. El objetivo principal del proyecto fue facilitar la conexión entre estos dos roles, permitiendo que puedan pactar sesiones de entrenamiento de forma sencilla, permitiendo una gestión eficiente de sesiones y pagos, actuando como intermediario digital.",

              duration: "4 meses",

              role: "Desarrollador Full Stack",

              type: "Proyecto Universitario",

              features: [
                "Carga y gestión de los servicios ofrecidos por los entrenadores.",
                "Implementación de un panel de estadísticas para que los entrenadores visualicen información relevante sobre su actividad.",
                "Visualización de sesiones agendadas, con detalle de estado y posibilidad de aceptarlas o rechazarlas.",
                "Integración de un sistema de pagos a través de Mercado Pago para facilitar las transacciones entre entrenadores y clientes.",
              ],
            }}
          />
        </section>
        {showProjectHolder && (
          <ProjectHolder
            completeData={showProjectHolder}
            onClose={() => setShowProjectHolder(null)}
          />
        )}
      </div>
      <div id="skills" className="skills-section container">
        <Title
          title="Habilidades"
          subtitle="Stack tecnológico y herramientas que domino actualmente."
        />
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
        <Title
          title="Contacto"
          subtitle="¿Tienes un proyecto en mente? ¡Hablemos!"
        />
        <div className="row">
          <div className="contact-data col-md-6">
            <section className="contact-texts">
              <ContactText
                text="patriciogabrielvecino@gmail.com"
                img="mail.svg"
              />
              <a
                className="linkedin-contact"
                href="https://www.linkedin.com/in/patriciogabrielvecino/"
                target="_blank"
              >
                <ContactText text="Patricio Vecino" img="in.svg" />
              </a>
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
