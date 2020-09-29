import styled from 'styled-components';


export const BannerSlider = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: 520px;
  margin: 0 auto;


  display: flex;
  justify-content: center;

  @media(min-width: 1180px){
    height: 450px;
  }

  #b1, #b2 {
    display: none;
  }

  .slider-content {
    position: absolute;
    overflow: hidden;
    width: 100%;
    max-width: 1128px;
    height: 100%;
    opacity: 0;

    display: flex;
    transition: opacity ease-in-out .38s;

    @media(min-width: 1180px) {
      overflow: visible;
    }

    .previous, .next {
      position: absolute;
      width: 56px;
      height: 56px;
      bottom: 2%;

      display: flex;
      align-items: center;
      justify-content: center;

      z-index: 999;
      color: #FF6B18;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0px 4px 4px 0px rgba(0,0,0,.1);
      cursor: pointer;
    }

    .previous {
      left: 31.5%;
    }

    .next {
      right: 31.5%;
    }

    @media(min-width: 1180px) {
      .previous, .next {
        top: 50%;
      }

      .previous {
        left: -28px;
      }

      .next {
        right: -28px;
      }
    }
  }

  #b1:checked ~ #banner1,
  #b2:checked ~ #banner2 {
      opacity: 1;
  }

  #banner1 {
    background: #F3BE00;
  }
  #banner2 {
    background: #00A8D2;
  }
`;

export const Banner = styled.div`
  width: 50%;
  max-width: 275px;
  margin-left: 7%;
  margin-top: 13rem;
  color: #fff;

  @media(min-width: 920px){
    margin-left: 10%;
    margin-top: 8rem;
  }

  h1 {
        font-size: 3.7rem;
  }

  span {
        font-size: 2.2rem;
        margin-bottom: 8px;
  }

  p {
        font-size: 2rem;
        margin: 8px 0 48px;
  }

  button {
    width: 199px;
    height: 48px;

    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    background: #FF6B18;
    border-radius: 53px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #d15c13;
    }
  }

  img {
    position: absolute;
    width: 170px;
    height: 170px;
    top: 23%;
    left: 65%;

    @media(min-width: 410px) {
      width: 320px;
      height: 320px;
      left: 52%;
    }

    @media(min-width: 920px){
      width: 320px;
      height: 320px;
      left: 68%;
      top: 20%;
    }

    @media(min-width: 1180px) {
      width: 479px;
      height: 479px;
      left: 52%;
      top: 9%;
    }
  }
`;
