import React, { Fragment } from 'react';
import "./Contacte.css";

function Contacte() {
  return (
      <Fragment>
        <section id="contacte" className='contacte-bg'>
            <div className="container contacte">
                <div className="contacte-left" data-aos="fade-right">
                    <h2>
                    <span>Samia ENJELVIN</span>    
                    <span>Fondatrice et présidente de l’association EFH</span>
                    <span>Diplômée dans le domaine de l’éducation populaire, jeunesse et sport  et entrepreneuse. </span>
                    </h2>
                    <p>Elle connait bien le milieu associatif. </p>
                    <p className="u-text-small">                        
                    Elle  est  administratrice du comité départemental handisport des hauts de Seine (actuellement secrétaire général du bureau) et régional.</p>
                    <p> Membre  à Polio France Ile de France. </p>
                    <p>Comme elle et les membres de l’association Participent  dans des groupes de travail  de Défense des droits et libertés,
                         émancipation des femmes en situation de handicap en Afrique. Vie de femme et handicap.</p>
                </div>
                
            </div>
        </section>       
    </Fragment>
  )
}

export default Contacte