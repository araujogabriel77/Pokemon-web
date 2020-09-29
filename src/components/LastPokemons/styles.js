import styled from 'styled-components';

export const PokeList = styled.section`
  width: 100%;
  max-width: 1128px;
  margin: 24px auto 40px;
  padding: 0 24px;

  @media(min-width: 1128px){
    padding: 0;
  }

  h1 {
    width: 100%;
    font-size: 24px;
    color: #72808E;
    margin-bottom: 3.2rem;
  }

  .pokemon-wrapper {
    max-width: 1128px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media(min-width: 580px){
      justify-content: space-between;
    }
  }
`;
