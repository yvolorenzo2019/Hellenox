import React from 'react';
import { Link } from 'react-router-dom'
import logoIMG from '../../assets/images/logo.svg'
import landingIMG from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css';

function Landing(){
    return (
        <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div id="logo-container">
                <img src={logoIMG} alt="Proffy"/>
                <h2>Sua Plataforma de estudos online</h2>
            </div>
            <img 
             src={landingIMG}
             alt="Plataforma de Estudos"
             className="hero-image"
             />

             <div className="buttons-container">
                 <Link to="/study" className="study">
                     <img src={studyIcon} alt="Estudar"/>
                     Estudar
                 </Link>

                 <Link to="/give-classes" className="give-classes">
                     <img src={giveClassesIcon} alt="Dar aulas"/>
                     Dar Aulas
                 </Link>
             </div>

             <span className="total-connections">
                   Total de 200 conexões realizadas <img src={PurpleHeartIcon} alt="Coração roxo" />
                 </span>
        </div>
     </div>
    )
}

export default Landing;