import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {TbCertificate} from 'react-icons/tb'
import {VscFolderLibrary} from 'react-icons/vsc'


const about = () => {
  return (
    <section id='about'>
      <h5>Lo Que Debes Saber</h5>
      <h2>Sobre Mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="Imagen de mi rostro" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>+6 Meses De Experiencia</small>
            </article>

            <article className="about__card">
              <TbCertificate className='about__icon'/>
              <h5>Certificados</h5>
              <small>2 Certificados</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Proyectos</h5>
              <small>3 Proyectos Actualmente</small>
            </article>

          </div>

          <p>
            Me llamo Alan, Soy estudiante de la carrera Analista de Sistemas con dos certificaciones,
            la primera, en Introducción a la Programación y la segunda una Diplomatura en full Stack,
            ambos brindados por el centro de E-learning de la UTN (Universidad Tecnológica Nacional).
            Si bien mi tíempo de experiencia no es el más extenso, estoy en constante búsqueda de
            nuevos conocimientos para lograr de forma eficiente y eficaz las labores a afrontar.
          </p>

          <a href="#contact" className="btn btn-primary">Hablémos</a>

        </div>
      </div>
    </section>
  )
}

export default about