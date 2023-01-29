import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';

function Header() {
  return (
   <header>
    <div className="container header__container">
      <h5>Hola Mi Nombre Es</h5>
      <h1>Alan Machado</h1>
      <h5 className="text-light"> Soy Full Stack Developer</h5>
      <CTA/>
      <HeaderSocial/>

      <a href="#portfolio" className='scroll__down'>Mis Trabajos</a>
    </div>

   </header>
  )
}

export default Header