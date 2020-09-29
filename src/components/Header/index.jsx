import React from 'react';
import { FaBars, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti'

import { Head } from './styles';

const Header = () => {

  return (
    <Head>
      <div className="container">
        <nav>
          <FaBars size={16} color="#999" id="menu" />
          <h1>Teste web</h1>
        </nav>

        <div className="actions">
          <button>Call to Action</button>
          <ul>
            <li><a href="/"><FaFacebookF size={12} /></a></li>
            <li><a href="/"><TiSocialInstagram size={12} /></a></li>
            <li><a href="/"><FaYoutube size={12} /></a></li>
          </ul>
        </div>
      </div>
    </Head>
  );
}

export default Header;
