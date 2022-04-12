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
                <div className='contacte-bureau-section'>
                    <h3>Bureau </h3>
                    <div>
                        <div className='contact_detail'><p><b className='contact_name_display'>Sam ENJELVIN</b> - Fondatrice et Présidente</p></div>
                        <div className='contact_detail'>
                            <p>Contact : &nbsp;</p>
                            <a className="contact_email" href="mailto:espaceefh@gmail.com">espaceefh@gmail.com</a>
                        </div>
                    </div>
                    <div>
                        <div className='contact_detail'><p><b className='contact_name_display'>Sara ENJELVIN  </b> - Vice-Présidente</p></div>
                        <div className='contact_detail'>
                            <p>Contact : &nbsp;</p>
                            <a className="contact_email" href="mailto:assoespacefemmeshandicaps@gmail.com">assoespacefemmeshandicaps@gmail.com</a>
                        </div>
                    </div>
                    <div>
                        <div className='contact_detail'><p><b className='contact_name_display'>Fatima Merrouchi </b> - Trésorière </p></div>
                        <div className='contact_detail'>
                            <p>Contact : &nbsp;</p>
                            <a className="contact_email" href="mailto:assoefh92@free.fr">assoefh92@free.fr</a>
                        </div>
                    </div>
                    <div>
                        <div className='contact_detail'><p><b className='contact_name_display'>Baya Luce</b> - Secrétaire générale </p></div>
                        <div className='contact_detail'>
                            <p>Contact : &nbsp;</p>
                            <a className="contact_email" href="mailto:baya.luce@gmail.com">baya.luce@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>       
    </Fragment>
  )
}

export default Contacte