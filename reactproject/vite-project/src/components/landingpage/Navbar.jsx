import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id="navbar" class="custom-navbar">
  <div class="container">
    <ul class="navbar-list">
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#orders">Orders</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>


  );
};

export default Navbar;
