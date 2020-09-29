import styled from 'styled-components';


export const FooterContent = styled.footer`
  background: #fff;
  width: 100%;
  padding: 49px 0;

  @media(min-width: 1128px) {
    margin-top: 82px;
    padding: 29px 0 14px;
  }

  .footer-container {
    width: 100%;
    max-width: 1128px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media(min-width: 1128px) {
      .footer-links {
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0;

        h3 {
          display: block;
        }

        #wrap {
          margin: 0;
          flex-direction: row;
        }
      }

      .footer-line {
        margin: 21px auto 15px;
        width: 100%;
      }

      .footer-copy {
      }
    }
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    color: #FF6B18;
    text-align: center;
    padding-top: 49px;

    h3 {
        display: none;
        color: #FF6B18;
        font-size: 26px;
        margin-bottom: 16px;
    }


    #wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 14px;

      #mail {
        display: flex;
        align-items: center;

        span {
        padding-top: 3px;
      }
        strong {
          color: #666666;
          font-size: 16px;
          margin-left: 14px;
        }
      }

    }

    ul {
      display: flex;
      align-items: center;
      justify-content: center;

      li {
        width: 32px;
        height: 32px;

        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #FFEBE0;
        border-radius: 50%;
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }

  .footer-line {
    background: #666666;
    opacity: 0.2;
    display: block;
    width: 90%;
    height: 1px;
    max-width: 1128px;
    margin: 32px auto;
  }

  .footer-info {

    @media(min-width: 1128px){
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        display: none;
      }

      span {
        margin: 0;
      }
      .footer-credits {

        span {
          display: none;
        }
      }
    }

    h3 {
      color: #FF6B18;
      font-size: 26px;
      margin-bottom: 16px;
    }

    span {
      color: #666666;
      font-size: 14px;
      margin-bottom: 42px;

      @media(min-width: 1128px) {
        margin-bottom: 0;
      }
    }

  .footer-credits {

    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 11px;
      color: #666666;
      margin-bottom: 5px;
      margin-top: 42px;
    }

    img {
      width: 40px;
    }
  }
  }


`;
