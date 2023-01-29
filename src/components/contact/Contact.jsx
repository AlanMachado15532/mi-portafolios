import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import {useRef} from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8stk3sq', 'template_5h8ej52', form.current, '1qsL0bE-BdCxPlYvi')
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Comuniquemonos</h5>
      <h2>Contactáme</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5 className='small__h5'>alanmachado15532@gmail.com</h5>
            <a href="mailto:alanmachado15532@gmail.com" target="_blank" rel='noopener noreferrer'>Enviar Correo</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Alan Machado</h5>
            <a href="https://m.me/alan.machado.5201" target="_blank" rel='noopener noreferrer'>Enviar Mensaje</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+54 9 3456-549910</h5>
            <a href="https://wa.me/5493456549910" target="_blank" rel='noopener noreferrer'>Enviar Whatsapp</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder=' Tu Nombre Completo' required />
          <input type="text" name='Email' placeholder='Tu Email' required />
          <textarea name='message' rows='7' placeholder='Tu Mensaje' required ></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact