import React, { Fragment, useState } from 'react';
import './Navbar.css';
import logo_img from '../tinified_images/logo_asso.jpg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <Fragment>
      <nav className="container navbar">
          <div className="logo">
            <div className="logo-text">
              <span> <img src={logo_img} className="logo_img" alt="Logo Association EFH" /></span><span className='logo_title'>Espace Femmes et Handicaps</span>
            </div>
          </div>
          <menu>
            <ul className="nav-links" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
              <li>
                <a href="#">Accueil</a>
              </li>
              <li>
                <a href="#features">Nos artistes</a>
              </li>
              <li>
                <a href="#galerie">Galeries</a>
              </li>
              <li>
                <a href="#evenement">Nos évenements</a>
              </li>
              <li>
                <a href="#contacte">Contact</a>
              </li>
            </ul>
          </menu>
          <div className='menu-icons' onClick={toggleMenu}>
            {
              showMenu ? (<RiCloseLine color='white' size={30} />)
              : (<GiHamburgerMenu color='white' size={33} />)
            }
          </div>
      </nav>
    </Fragment>
  )
}

export default Navbar