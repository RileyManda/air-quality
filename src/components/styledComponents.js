import styled from 'styled-components';
// import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import usaMap from '../assets/maps/world.svg';

export const TopCard = styled(Card)`
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  height: 300px;
  background-image: url(${usaMap});
  background-size: cover;
  background-position: center; /* Changed to center */
  background-color: #ec4c8a;
  color: #fff;
  font-weight: bold;
`;

export const ContentCard = styled(Card)`
  display: flex;
  height: 170px;
  background-image: url(${usaMap});
  background-size: cover;
  background-position: center;
  width: 100%;
  margin: 0;
  margin-top: 20px;
  background-color: #ec4c8a;
  color: #fff;
  font-weight: bold;
  border: none;
`;

export const MeasurementData = styled.div`
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

// export const CardContainer = styled(Card.Body)`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// `;
