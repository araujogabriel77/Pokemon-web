import React from 'react';
import { FaFacebookF, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti'

import { FooterContent } from './styles';

import footerLogo from '../../assets/footer-logo.svg';

const Footer = () => {

  return (
    <FooterContent>
      <div className="footer-container">
        <div className="footer-links">

          <h3>Teste web</h3>
          <div id="wrap">
            <div id="mail">
              <span><FaEnvelope size={16} /></span>
              <strong>email@testeweb.com</strong>
            </div>

            <ul>
              <li><a href="/"><FaFacebookF size={12} /></a></li>
              <li><a href="/"><TiSocialInstagram size={12} /></a></li>
              <li><a href="/"><FaYoutube size={12} /></a></li>
            </ul>
          </div>

        </div>

        <span className="footer-line"></span>

        <div className="footer-info">
          <h3>Teste web</h3>

          <span>2020 © Todos os direitos reservados.</span>

          <div className="footer-credits">
            <span>Desenvolvido por</span>
            <img src={footerLogo} alt="Yooh" />
          </div>
        </div>

      </div>
    </FooterContent>
  );
}

export default Footer;
