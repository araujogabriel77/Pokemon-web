import styled from 'styled-components';

export const MainContent = styled.main`
  position: relative;
  width: 100%;
  max-width: 1128px;
  margin: 90px auto 0;

  display: flex;
  flex-direction: column;

  @media(min-width: 1024px){
    flex-direction: row;
  }

  .pokemons-list {
    width: 50%;
    display: none;

    @media(min-width: 1128px){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 24px;
      row-gap: 90px;
  }

    .poke-wrap {
      background: #fff;
      position: relative;
      height: 293.85px;
      width: 264px;
      box-shadow: 0px 4px 4px 0px 000000, 5%;
      border-radius: 6px;
      padding-left: 6px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: 128px;
        height: 128px;
        margin: 0 auto;
      }

      h3 {
        text-transform: capitalize;
        font-size: 24px;
        color: #72808E;
        position: absolute;
        top: -48px;
        left: 0;
      }
    }
  }

  .text-content {
    background: #FFD029;
    width: 100%;

    display: flex;
    flex-direction: column;


    @media(min-width: 1128px){
      margin-left: 24px;
      max-width: 541px;
      height: 500px;
    }

    h1 {
      color: #FF6B18;
      font-size: 24px;

      margin: 46px 0 22px 48px;
    }
    p {
      color: #000;
      font-size: 16px;

      margin: 0 48px;
    }

      button {
      width: 199px;
      height: 48px;
      margin: 33px auto;

      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      background: #FF6B18;
      border-radius: 53px;
      transition: background 0.3s;

      &:hover {
        background: #d15c13;
      }
      @media(min-width: 1024px){
        margin-left: 48px;
      }
    }
  }

  #pokeball {
    position: absolute;
    height: 163px;
    width: 270px;
    display: none;
    bottom: -7%;
    right: 20%;

    @media(min-width: 1320px){
      display: block;
    }
  }

  #pikachu {
    position: absolute;
    height: 354px;
    width: 323px;
    display: none;

    bottom: -13%;
    right: -9%;

    @media(min-width: 1320px){
      display: block;
    }
  }
`;
