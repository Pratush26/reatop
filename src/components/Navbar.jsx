// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
function Navbar() {
  return (
    <nav className='flex'>
      <section>
        <h3>Pratush Barua</h3>
      </section>
      <section>
      <ul className='flex'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
      </section>
    </nav>
  );
}

export default Navbar;
