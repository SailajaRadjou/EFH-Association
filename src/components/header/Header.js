import React, { Fragment } from 'react'
import "./Header.css";
import imageHeader from "../tinified_images/Danses_Bayaluce.JPG";
import { BsMouse } from "react-icons/bs";
const Header = () => {
  return (
    <Fragment>
       <section id="header">
        <div className="container header">
          <div className="header-left" data-aos="fade-right">
            <h1>
              <span>L'art & la culture,</span>
              <span> un instrument au service de la liberté d'expression</span>
              <span>et la promotion de la paix.</span>
            </h1>
            <p className="u-text-small">
              L’Association EFH espace femmes & handicaps  a été créée en 2003. 
              Avec un objectif principal, la visibilité des femmes en situation de handicap dans la société. 
              Historiquement, et dans le début des années 2000, cette association avec ses membres actifs, ses membres d’honneurs, ont pu mener un combat fort durant bien une décennie  pour permettre aux femmes en situation de handicap de revendiquer leur statut de femme à part entière et de lutter pour une réelle prise en charge de la maternité des femmes en situation de handicap  en France. 
              L’association EFH  continue à œuvrer pour la visibilité des femmes en situation de handicap dans le monde artistique t culturel. 
              Les expositions, des salons, des organisations de  rencontres avec les artistes-peintres, les écrivaines et le public sont des évènements coutumiers. C’est l’essence même de nos actions.  

            </p>
            
          </div>
          <div className="header-right">
            <img src={imageHeader} className="img-header" alt="phone" />
            <p>Dessiné par BAYA LUCE</p>
          </div>
        </div>
        <div className="floating-icon">
          <a href="#features">
            <BsMouse color="#fff" size={25} className="mouse" />
          </a>
        </div>
    </section>
    </Fragment>
  )
}

export default Header