import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

const TopCard = ({
  backgroundImage, location, views, footerText,
}) => (
  <Card className="top-card flex-container flex-column">
    <Stack direction="horizontal" gap={2}>
      <div className="image-container p-2" style={{ backgroundImage: `url(${backgroundImage})` }} />
      <Stack gap={2} className="col-md-5 p-2 flex-end">
        <div className="top-title-container bold">
          <Card.Title className="top-title white-text ellipsis-multiline-2 p-2"><h2>{location}</h2></Card.Title>
          <Card.Title className="sub-text white-text bold p-2"><h2>{views}</h2></Card.Title>
        </div>
      </Stack>
    </Stack>
    <Card.Footer className="footer-container fixed-footer white-text">{footerText}</Card.Footer>
  </Card>
);

TopCard.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
};

export default TopCard;
