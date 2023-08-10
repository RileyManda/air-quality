import { css } from 'styled-components';

export const desktopMediaQuery = css`
  @media (min-width: 769px) {
    .content-card {
      background-size: 417px 60%;
      background-position: center 20%;
      padding-top: 200px;
      margin-bottom: 70px;
      height: 450px;
      width: 90%;
      margin-left: -7px;
      margin-right: 110px;
      margin-top: -35px;
      
      .card-content {
        justify-content: flex-start;
        align-items: flex-start;
        margin-right: 48px;
        margin-top: -55px;
      }

      .title-text {
        font-size: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left: 65px;
        width: 60%;
      }

      .measurements-item {
        font-size: 18px;
      }

     .image-container {
      min-height: 270px;
      height:335px;
      background-size: cover;
      background-position: left;
      margin-left: 140px;
      margin-right: -136px;
      margin-top: 27px;
      width: 40%;
  }

      .top.card {
        height: 400px;
      }

      .card-info-container {
        margin-top: 120px;
      }

      .top-title-container {
        margin-top: 80px;
      }
    }
  }
`;

export const mobileMediaQuery = css`
  @media (max-width: 375px) {
    .content-card {
      margin-right: -17px;
      margin-left: 7px;
      padding-top: 29px;
      margin-bottom: 34px;
      height: 170px;

      .card-content {
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: -4px;
        margin-right: -1px;
      }

      .title-text {
        font-size: 12px;
      }

      .footer-text {
        font-size: 12px;
      }

      .card-info-container {
        margin-top: 55px;
      }
    }
  }

  @media (max-width: 390px) {
 .card-content {
        margin-top: 13px;
      }
  }

    @media (max-width: 393px) {
    .card-content {
        margin-top: 12px;
    }
    }
`;
