import React, { Fragment, useState } from "react";
import "./Features.css";
import { BsFillBookmarkStarFill, BsFillPaletteFill, BsChevronDoubleRight } from "react-icons/bs";
import photoArtiste from "../tinified_images/Bayaluce_photo.jpg";
import Creation from "../creation/Creation";
import { Link } from "react-router-dom";

const Features = () => {
 
      const [auth, setAuth] = useState(false);
      if(auth){
        return <Creation />
      }
  return (
    <Fragment>
      <section id="features">
        <div className="container features">
          <div className="title" data-aos="fade-up">
            <BsFillBookmarkStarFill color="orangered" size={30} />
            <h2>Nos Artistes</h2>
            
            {/**/}
          </div>
          <div className="features-content">
            <div className="features-left" data-aos="fade-right">
              <img src={photoArtiste} height={500} alt="Photo de l'artiste" />
            </div>
            <div className="features-right" data-aos="fade-left">
              <h3>Baya Luce</h3>
                <p className="features-description">
                  Artiste peintre confirmée. De Paris à Kiev en passant par Yokohama, Baya Luce s’est construite dans l’art et la profondeur de l’imagination. 
                  Baya Luce improvise à la manière d’Henri Michaud, d’une écriture toute faites de résonnances, d’enchainements visuels inattendus, s’accordant parfois de paisibles temps de pauses.
                </p>
                <div className="features-oeuvres">
                  <BsFillPaletteFill color="orangered" size={30} />
                  <Link to="/creation"><h4> Ses Oeuvres </h4></Link>
                  <BsChevronDoubleRight color="orangered" size={30} />
                </div>  
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Features;