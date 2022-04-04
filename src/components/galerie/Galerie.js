import React, { Fragment, useState } from 'react'
import "./Galerie.css";
import imageHeader1 from "../tinified_images/gal_photo1.jpg";
import imageHeader2 from "../tinified_images/gal_photo2.jpg";
import imageHeader3 from "../tinified_images/gal_photo3.jpg";
import imageHeader4 from "../tinified_images/gal_photo4.jpg";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
const Galerie = () => {
  
  return (
    <Fragment>
        <section id="galerie">
            <div className="container galerie" data-aos="fade-up">
                <h2>Galeries</h2>
                <Carousel plugins={['arrows']}>
                  <img src={imageHeader1} className="galerie_image"/>
                  <img src={imageHeader2} className="galerie_image"/>
                  <img src={imageHeader3} className="galerie_image"/>
                  <img src={imageHeader4} className="galerie_image"/>
                </Carousel>
            </div>
        </section>  

    </Fragment>
  )
}

export default Galerie