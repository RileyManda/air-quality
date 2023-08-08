import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const TopCard = ({
  backgroundImage, location, country, footerText,
}) => (
  <Card className="top-card">
    <div className="image-container" style={{ backgroundImage: `url(${backgroundImage})` }} />
    <div className="top-title-container">
      <Card.Title className="top-title white-text"><h2>{location}</h2></Card.Title>
      <Card.Title className="sub-text white-text"><h2>{country}</h2></Card.Title>
    </div>
    <Card.Footer className="footer-text white-text">{footerText}</Card.Footer>
  </Card>
);

TopCard.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
};

export default TopCard;
