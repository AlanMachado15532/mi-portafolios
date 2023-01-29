import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio2.jpg'
import IMG2 from '../../assets/portfolio4.jpg'
import IMG3 from '../../assets/portfolio5.png'


const data =[
  {
    id:1,
    image: IMG1,
    title: 'proximamente',
    GitHub:'https://github.com/AlanMachado15532?tab=repositories',
    URL:'#portfolio'
  },

  {
    id:2,
    image: IMG2,
    title: 'proximamente',
    GitHub:'https://github.com/AlanMachado15532?tab=repositories',
    URL:'#portfolio'
  },

  {
    id:3,
    image: IMG3,
    title: 'proximamente',
    GitHub:'https://github.com/AlanMachado15532?tab=repositories',
    URL:'#portfolio'
  }
];




function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>Mis Trabajos Recientes</h5>
      <h2>Portafolios</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, GitHub, URL}) =>{
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={GitHub} className='btn'target='_blank' rel='noopener noreferrer'>GitHub</a>
                  <a href={URL} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>URL</a>
                </div>
              </article>
            )
          })      
        }
      </div>
    </section>
  );
}

export default Portfolio