import React, { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Btn } from './components/btn/Btn'
import { MiniSection } from './components/miniSection/MiniSection'
import { Card } from './components/card/Card'
import { MiniCard } from './components/miniCard/MiniCard'
import { ContactText } from './components/contactText/ContactText'


function App() {

  return (
    <>
      <Navbar />
      <div className='hero-section container'>
        <h2 className='hero-title text-center wow animate__animated animate__pulse'>Desarrollador de Software</h2>
        <p className='hero-subtitle text-center animate__animated animate__pulse'>Construyo aplicaciones web, enfocadas en rendimiento y escalabilidad.</p>
        <Btn text='Ver Portfolio' img='arrow-down.svg'/>
      </div>
      <div id='about' className='about-section container '>
        <div className='row'>
          <div className='about-container-photo col-md-4 wow animate__animated animate__fadeInLeft'>
            <img className='about-photo'  src='/about-photo.jpeg' alt='foto de perfil' />
          </div>
          <div className='about-container-text col-md-8 wow animate__animated animate__fadeInRight'>
            <p className='about-text'>
              Soy un <span className='about-text-color'>desarrollador de software</span> principiante en la creación de aplicaciones web. 
              Mi principal objetivo es crear aplicaciones web de alto rendimiento y escalables.
            </p>
            <section className='about-info'> 
              <MiniSection title='Educacion' img='graduation.svg' description='Actual estudiante de la Licenciatura en Sistemas, en la Universidad Argentina de la Empresa (UADE).' />
              <MiniSection title='Experiencia' img='eye.svg' description='Creacion de webapps y sitios web, para startups, empresas y uso personal.' />
              <MiniSection title='Habilidades' img='outline.svg' description='Desarrollo Frontend y Backend.' />
              <MiniSection title='Idiomas' img='traductor.svg' description='Español (nativo), Ingles (intermedio-avanzado).' />
            </section>
            <Btn text='Descargar CV' img='download.svg'/>
          </div>
        </div>
      </div>
      <div id='portfolio' className='portfolio-section container'>
        <h4 className="portfolio-section-title">Proyectos destacados</h4>
        <section className='portfolio-cards'>
          <Card title='Stockflow' img='stockflow.png' description='Creacion de Webapp para locales de gastronomia.' techs='flask.svg, fastapi.svg, sqlalchemy.svg' repoLink='https://github.com/juanmatarga/Stockflow'/>
          <Card title='Julio Vecino Propiedades' img='stockflow.png' description='Community Manager y Pagina web para inmobiliaria.' techs='bootstrap.svg, javascript.svg, json.svg' repoLink='https://github.com/PatricioVecino/JulioVecinoPropiedades'/>
          <Card title='Migliorisi Propiedades' img='stockflow.png' description='Creacion de funcionalidades en aplicacion web.' techs='csharp.svg, javascript.svg, net.svg'/>
        </section>
      </div>
      <div id='skills' className='skills-section container'>
          <h4 className='skills-title'>Habilidades</h4>
          <section className='skills-section-cards'>
            <MiniCard title='Frontend'/>
            <MiniCard title='Backend'/>
            <MiniCard title='Bases de datos'/>
            <MiniCard title='Diseno Responsive'/>
            <MiniCard title='Trabajo en Equipo'/>
            <MiniCard title='Comunicacion'/>
            <MiniCard title='Ingles Avanzado'/>
            <MiniCard title='Proactividad'/>
          </section>
      </div>  
      <div id='contact' className='contact-section container'>
        <h4 className='contact-title'>Contacto</h4>
        <div className='row'>
            <div className='contact-data col-md-6'>
                  <p className='contact-subtitle'>¿Tienes un proyecto en mente? ¡Hablemos!</p>
                  <section className='contact-texts'>
                    <ContactText text='patriciogabrielvecino@gmail.com' img='mail.svg'/>
                    <ContactText text='(+54) 11 1234-5678' img='phone.svg'/>
                    <ContactText text='Buenos Aires, Argentina' img='location.svg'/>
                  </section>
            </div>
            <div className='contact-form col-md-6 wow animate__animated animate__fadeInUp'>
                <form action="">
                  <div className='form-group'>
                    <input className='form-control shadow' id='nameInput' type="text" placeholder='Tu nombre...'/>
                  </div>
                  <div className='form-group'>
                    <input className='form-control shadow' id='mailInput' type="text" placeholder='Tu mail...' />
                  </div>
                  <textarea className='form-control shadow' id="msgInput" cols="80" rows="3" placeholder="Mensaje"></textarea>
                  <Btn text='Enviar Mensaje' img='send.svg'/>
                </form>
            </div>
        </div>
      </div>

      <footer className='footer-container'>
        <footer className='container text-center'>
          <span>© 2025 Patricio Vecino. Todos los derechos reservados.</span>
        </footer>
      </footer>
    </>
  )
}

export default App