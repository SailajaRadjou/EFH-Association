import React, { Fragment } from 'react';
import "./Creation.css";
import ScrollToTop from "react-scroll-to-top";
import logo_img from '../tinified_images/logo_asso.jpg';
import { Link } from "react-router-dom";
import oeuvreImg1 from "../tinified_images/Caresse_Bayaluce.JPG";
import oeuvreImg2 from "../tinified_images/Sensualite_Bayaluce.jpg";
import oeuvreImg3 from "../tinified_images/Danses_Bayaluce.JPG";
import gravure1 from "../tinified_images/Bayaluce-Graveur.jpg";
import gravure2 from "../tinified_images/Bayaluce-Gravure.jpg";
import gravure3 from "../tinified_images/Bayaluce-Gravure1.jpg";
import { IoIosHome } from 'react-icons/io';
function Creation() {
  return (
    <Fragment>
       <ScrollToTop smooth />
      <div className='creation-display'>
        <div className="creation-logo">
            <div className="creation-logo-text">
              <span><Link to="/"> <img src={logo_img} className="logo_img" alt="Logo Association EFH" /></Link></span><span className='creation-logo-title'>Espace Femmes et Handicaps</span>
            </div>
            <Link to="/"><span className='home-icon'><IoIosHome color='white' size={38} /><b className='link-accueil'>Accueil</b> </span></Link>
        </div>
        
        <div class="row row-cols-2 row-cols-md-2 g-4 display-card">
            <div class="col">
                <div className="card">
                  <img src={oeuvreImg1} className="card-img-top" alt="Peinture Caresse par Bayaluce" />
                  <div className="card-body">
                    <h2 className="card-title">Caresse Par Bayaluce</h2>
                    <p className="card-text">Caresse Par Bayaluce , This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
            </div>  
            <div class="col">  
                <div className="card">
                  <img src={oeuvreImg2} className="card-img-top" alt="Peinture Sensualité par Bayaluce" />
                  <div className="card-body">
                    <h2 className="card-title">Sensualité Par Bayaluce</h2>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    
                  </div>
                </div>
            </div> 
            <div class="col">     
                <div className="card">
                  <img src={oeuvreImg3} className="card-img-top" alt="Peinture Danses par Bayaluce" />
                  <div className="card-body">
                    <h2 className="card-title">Danses de la Terre, Bayaluce</h2>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    
                  </div>
                </div>
            </div>    
        </div>
        <div class="row row-cols-2 row-cols-md-2 g-4 display-card">
            <div class="col">
                <div className="card">
                  <img src={gravure1} className="card-img-top" alt="Graveur Caligraphe" />
                  <div className="card-body">
                    <h2 className="card-title">Graveur Caligraphe, Baya Luce</h2>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    
                  </div>
                </div>
            </div>  
            <div class="col">  
                <div className="card">
                  <img src={gravure2} className="card-img-top" alt="Article de Bayaluce" />
                  <div className="card-body">
                    <h2 className="card-title">Article de Baya Luce dans le journal</h2>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    
                  </div>
                </div>
            </div> 
            <div class="col">     
                <div className="card">
                  <img src={gravure3} className="card-img-top" alt="Gravure de Bayaluce" />
                  <div className="card-body">
                    <h2 className="card-title">Gravure de Baya Luce</h2>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    
                  </div>
                </div>
            </div>    
        </div>
      </div>
    </Fragment>  
  )
}

export default Creation;