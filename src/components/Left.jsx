import React from 'react';
import Skill from './Skill';

const Left = () => (
  <div>
    <div className='info'>
      <span className='subtitle-b subtitle-info'>INFO</span>
      <ul>
        <li className='about-item' />
        <span className='subtitle title-ubi'>Ubicación</span>
        {/* <icon></icon> */}
        <p className='text text-ubi'>Medellín, Colombia</p>
        <li className='about-item' />
        <span className='subtitle title-contact'>Contacto</span>
        {/* <icon></icon> */}
        <p className='text text-contact'>+57301-407-2054</p>
        <li className='about-item' />
        <span className='subtitle title-email'>Correo</span>
        {/* <icon></icon> */}
        <p className='text text-email'>julicadaramimedellin@gmail.com</p>
      </ul>
    </div>
    <div className='skills'>
      <span className='subtitle-b subtitle-skills'>Habilidades</span>
      <Skill title='Desarrollo de frontend'/>
     
    </div>
    <hr />
  </div>
);

export default Left;
