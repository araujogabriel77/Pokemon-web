import styled from 'styled-components';

export const PokeSlider = styled.div`
position: relative;
  width: 100%;
  max-width: 358px;
  min-height: 304px;
  margin: 30px auto;

  input {
    display: none;
  }

  @media(min-width: 1128px){
    display: none;
  }

  .imgContainer {
    background: #fff;
    position: absolute;
    width: 100%;
    max-width: 358px;
    height: 304px;
    left: 0;
    top: 0;
    opacity: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: opacity ease-in-out .38s;

    h3 {
      font-size: 24px;
      color: #72808E;
      position: absolute;
      left: 8px;
      top: -44px;
    }

    img {
      height: 173.58px;
      width: 173.58px;
    }

    .previous, .next {
      position: absolute;
      width: 56px;
      height: 56px;

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
      left: 0;
      @media(min-width: 414px){
        left: -18px;
      }
    }
    .next {
      right: 0;
      @media(min-width: 414px){
        right: -18px;
      }
    }


  }

  #p1:checked ~ #poke01,
  #p2:checked ~ #poke02,
  #p3:checked ~ #poke03,
  #p4:checked ~ #poke04 {
    opacity: 1;
  }

  #p1:checked ~ .nav #dot1,
  #p2:checked ~ .nav #dot2,
  #p3:checked ~ .nav #dot3,
  #p4:checked ~ .nav #dot4 {
    background: #FF6B18;
  }
  .nav {
    position: absolute;
    bottom: -48px;
    width: 100%;
    height: 36px;

    display: flex;
    align-items: center;
    justify-content: center;

    .dots {
      background: #C4C4C4;
      width: 12px;
      height: 12px;
      border-radius: 50%;

      & + label {
        margin-left: 8px;
      }
    }
  }

`;
