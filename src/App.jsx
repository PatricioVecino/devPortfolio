import React, { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Btn } from './components/btn/Btn'
import { MiniSection } from './components/miniSection/MiniSection'


function App() {

  return (
    <>
      <Navbar />
      <div className='hero-section container'>
        <h2 className='hero-title text-center'>Desarrollador de Software</h2>
        <p className='hero-subtitle text-center'>Construyo aplicaciones web, enfocadas en rendimiento y escalabilidad.</p>
        <Btn text='Ver Portfolio' img='arrow-down.svg'/>
      </div>
      <div id='about' className='about-section container '>
        <div className='row'>
          <div className='about-container-photo col-md-4'>
            <img className='about-photo'  src='public/about-photo.jpeg' alt='foto de perfil' />
          </div>
          <div className='about-container-text col-md-8'>
            <p className='about-text'>
              Soy un <span className='about-text-color'>desarrollador de software</span> principiante en la creación de aplicaciones web. 
              Mi principal objetivo es crear aplicaciones web de alto rendimiento y escalables.
            </p>
            <section className='about-info'> 
              <MiniSection title='Educacion' img='graduation.svg' description='Actual estudiante de la Licenciatura en Sistemas, en la Universidad Argentina de la Empresa (UADE).' />
              <MiniSection title='Experiencia' img='eye.svg' description='Creacion de webapps y sitios web, para startups, empresas y uso personal.' />
              <MiniSection title='Habilidades' img='outline.svg' description='Desarrollo Frontend y Backend, utilizando tecnologias como React, Node.js, Flask, entre otras.' />
              <MiniSection title='Idiomas' img='traductor.svg' description='Español (nativo), Ingles (intermedio-avanzado).' />
            </section>
            <Btn text='Descargar CV' img='download.svg'/>
          </div>
        </div>
      </div>

    </>
  )
}

export default App