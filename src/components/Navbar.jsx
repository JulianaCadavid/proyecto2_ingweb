import React from 'react';
import foto from '../foto.png';

const Navbar = () => (
  <div className='navbar'>
    <header className='header'>
      <h1 className='header-name'>JULIANA </h1>
      <h1 className='header-last'>CADAVID RAMÍREZ</h1>
      <img className='foto' src={foto} alt='Foto' />
      <div className='vertical' />
    </header>
  </div>
);

export default Navbar;
