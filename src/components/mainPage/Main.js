import React ,{ Fragment } from 'react';
import '../../App.css';
import Features from '../artistes/Features';
import Footer from '../footer/Footer';
import Galerie from '../galerie/Galerie';
import Evenement from '../evenement/Evenement';
import Contacte from '../contacte/Contacte';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
function Main() {
  return (
    <Fragment>
        <div>
            <header className='header-bg'>
                <Navbar />
                <Header />
            </header>
            <Features /> 
            <Galerie />
            <Evenement /> 
            <Contacte />
        </div>        
    </Fragment>
  )
}

export default Main;