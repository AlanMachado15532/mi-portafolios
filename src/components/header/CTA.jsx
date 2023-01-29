import React from 'react'
import AlanMachadoCV2023 from '../../assets/AlanMachadoCV2023.pdf'

function CTA() {
  return (
    <div className="cta">
        <a href={AlanMachadoCV2023} download className='btn'>Descargar CV</a>
        <a href="#contact" className='btn btn-primary'>Contactáme</a>
    </div>
  )
}

export default CTA