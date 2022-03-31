import React, { Fragment, useState } from 'react';
import './Navbar.css';
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
            <p className="logo-text">
                Social<span>X</span>
            </p>
          </div>
          <menu>
            <ul className="nav-links" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#download">Download</a>
              </li>
              <li>
                <a href="#subscribe">Subscribe</a>
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