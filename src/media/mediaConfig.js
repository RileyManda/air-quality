import { css } from 'styled-components';

export const desktopMediaQuery = css`
  @media (min-width: 768px) {
    .content-card {
      background-size: 417px 60%;
      background-position: center 20%;
      padding-top: 39px;
      margin-bottom: 70px;
      height: 450px;
      width: 90%;
      margin-left: -7px;
      
      .card-content {
        justify-content: flex-start;
        align-items: flex-start;
        margin-right: 29px;
        margin-top: 111px;
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
        min-height: 297px;
        margin-top: 12px;
        margin-bottom: 12px;
      }

      .top.card {
        height: 300px;
      }

      .card-info-container {
        margin-top: 120px;
      }

      .top-title-container {
        margin-top: 10%;
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
`;
