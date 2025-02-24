import React, { useState } from 'react'
import { Navbar } from './components/navbar/Navbar'
import { Btn } from './components/btn/Btn'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <div className='hero-section container'>
        <h2 className='hero-title text-center'>Desarrollador de Software</h2>
        <p className='hero-subtitle text-center'>Construyo aplicaciones web, enfocadas en rendimiento y escalabilidad.</p>
        <Btn text='Ver Portfolio' img='arrow-down.png'/>
      </div>

    </>
  )
}

export default App