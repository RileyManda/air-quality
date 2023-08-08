import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const TopCard = ({
  backgroundImage, location, views, footerText,
}) => (
  <Card className="top-card flex-container">
    <div className="image-container" style={{ backgroundImage: `url(${backgroundImage})` }} />
    <div className="top-title-container flex-container flex-column flex-end">
      <Card.Title className="top-title white-text"><h2>{location}</h2></Card.Title>
      <Card.Title className="sub-text white-text bold"><h2>{views}</h2></Card.Title>
    </div>
    <Card.Footer className="footer-text white-text">{footerText}</Card.Footer>
  </Card>
);

TopCard.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
};

export default TopCard;
