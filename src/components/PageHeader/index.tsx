import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

function PageHeader() {
  return (
    <header className="page-header">
              <div className="top-bar-container">
                  <Link to="/">
                    <img src={backIcon}></img>
                  </Link>
                   <img src={logoImg}></img>
              </div>

              <div className="header-content">
                  <strong>Esses são os proffys disponiveis</strong>
              </div>
            </header>
            );
}

export default PageHeader;