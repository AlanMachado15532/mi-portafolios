import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <a href="#header" className="footer__logo">Alan Machado</a>

      <ul className='permalinks'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Sobre Mi</a></li>
        <li><a href="#experience">Mi Experiencia</a></li>
        <li><a href="#portfolio">Portafolios</a></li>
        <li><a href="#contact">Contactáme</a></li>
      </ul>

      <div className="footer__Social">
        <a href="https://www.facebook.com/alan.machado.5201" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
        <a href="https://www.instagram.com/alan_portee/" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Alan Machado. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer