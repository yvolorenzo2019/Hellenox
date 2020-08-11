import React from 'react';

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';

function TeacherItem(){
 return(
    <article className="teacher-item">
     <header>
        <img src="https://www.hojeemdia.com.br/polopoly_fs/1.570196!/image/image.jpg_gen/derivatives/landscape_653/image.jpg" alt="O Cadelão"/>
        <div>
             <strong>Caramelo Steves</strong>
             <span>Cadeologia</span>
        </div>
     </header>
    <p>
        Especialista em cadeologia ele gosta de latir
        <br/> <br/>
        Ensina as cadelas a como latirem de forma correta 
        e ensina tambem aos seus tutoes como dar comida da 
        maneira exata
    </p>

    <footer>
        <p>
            Preço/hora
            <strong>80,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="zap zap"/>
            Entrar em contato
        </button>
    </footer>
</article>
 );
}

export default TeacherItem;