import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { BannerSlider, Banner } from './styles';

import heroBannerImg from '../../assets/hero-banner.svg'

const Slider = () => {

  return (
    <BannerSlider>
      <input type="radio" name="banner" id="b1" defaultChecked />
      <input type="radio" name="banner" id="b2" />

      <div className="slider-content" id="banner1">
        <Banner>
          <h1><span>Faça seu teste</span> <br /> De Frontend</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, euismod at egestas sapien porttitor dui. </p>
          <button>Call to Action</button>
          <img src={heroBannerImg} alt="Charizard" />
        </Banner>
        <label htmlFor="b2" className="previous"><FaArrowLeft size={28} /></label>
        <label htmlFor="b2" className="next"><FaArrowRight size={28} /></label>
      </div>

      <div className="slider-content" id="banner2">
        <Banner>
          <h1><span>Faça seu teste</span> <br /> Outro Banner</h1>
          <p>Ait amet, consectetur adipiscing elit. Amet, euismod at egestas sapien porttitor dui.</p>
          <button>Call to Action</button>
          <img src={heroBannerImg} alt="Charizard" />
        </Banner>
        <label htmlFor="b1" className="previous"><FaArrowLeft size={28} /></label>
        <label htmlFor="b1" className="next"><FaArrowRight size={28} /></label>
      </div>
    </BannerSlider>
  );
}

export default Slider;
