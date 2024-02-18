import logo from '../../images/logo.png';
import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Логотип" className='header__logo img'/>
      </div>
      <nav className="header__nav">
        <Link to="/plans" className="header__nav-link">
          Планы на день
        </Link>
        <Link to="/longterm" className="header__nav-link">
          Долгосрочные планы
        </Link>
        <Link to="/more" className="header__nav-link">
          Еще...
        </Link>
      </nav>
    </header>
  );
};

export default Header;
