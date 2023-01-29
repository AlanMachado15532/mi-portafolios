import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

function HeaderSocial() {
  return (
    <div className="header__social">
        <a href="https://www.linkedin.com/in/alan-machado-1207b6221/" target="_blank" rel='noopener noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/AlanMachado15532?tab=repositories" target="_blank" rel='noopener noreferrer'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocial