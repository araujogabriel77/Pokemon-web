import styled from 'styled-components';

export const Head = styled.header`
background: #fff;
height: 80px;
width: 100%;
padding: 0 20px;

  .container {
    width: 100%;
    height: 100%;
    max-width: 1100px;
    margin: 0 auto;
    color: #FF6B18;

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
    display: flex;
    align-items: center;

    #menu {
      cursor: pointer;
    }

    h1 {
      margin-left: 25px;
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      display: none;
      width: 197px;
      height: 48px;

      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      background: #FF6B18;
      border-radius: 53px;
      transition: background 0.3s;

      &:hover {
        background: #d15c13;
      }

      @media(min-width: 768px) {
        display: block;
      }
    }

    ul {
      display: flex;

      li {
        width: 32px;
        height: 32px;

        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #FFEBE0;
        border-radius: 50%;
        margin: 0 10px;
        cursor: pointer;
      }
    }
  }
}
`;
