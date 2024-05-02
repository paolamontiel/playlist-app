import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo-music.png';
import './styles.css';

const Header = () => {
  return (
    <header>
       <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
    </header>
  );
};

export default Header;