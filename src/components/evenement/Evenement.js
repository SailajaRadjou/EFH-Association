import React, { Fragment } from 'react';
import "./Evenement.css";

const Evenement = () => {
  return (
      <Fragment>
        <section id="evenement">
            <div className="container evenement" data-aos="fade-up">
                <h2>Nos évenements</h2>
                <div className='evenements-description'>                    
                    <p><span className='evenements-titre'>Le printemps des abeilles</span>&nbsp;:&nbsp; Un évènement traditionnel et automnal, rencontre avec une écrivaine un  écrivain en situation de handicap.</p>  
                    <p><span className='evenements-titre'>Un été, une exposition</span>&nbsp;:&nbsp; Des expositions d’œuvres artistiques de nos artistes-peintres  sont proposées tout le long de la saison.</p> 
                    <p><span className='evenements-titre'>Des rencontres amicales, des  activités sportives, des sorties et loisirs</span>&nbsp; sont ainsi  proposées à nos membres, et adhérents pour tisser les liens.</p> 
                    <p><span className='evenements-titre'>Des voyages </span> &nbsp;pour favoriser l’amitié et la fraternité avec nos amis européens et africains.</p>
                </div>
            </div>
        </section>        
    </Fragment>
  )
}

export default Evenement
