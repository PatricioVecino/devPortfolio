import React from 'react';
import './Navbar.css';
import logoPV from '../../assets/component-images/pv.png';

export function Navbar(){
    return(
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='https://github.com/PatricioVecino' target='_blank'> 
                    <span>Patricio Vecino</span> 
                </a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id='navbarNav'>
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#SobreMi">Sobre mi</a>
                        <a className="nav-link active" href="#Proyectos">Proyectos</a>
                        <a className="nav-link active" href="#Habilidades">Habilidades</a>
                        <a className="nav-link active" href="#Contacto">Contacto</a>
                    </div>
                </div>
            </div> 
        </nav>
    )
}