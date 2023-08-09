import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchField from './SearchField';

const TopCard = ({
  backgroundImage, location, views,
  footerText, toggleSearch, isSearchVisible,
  setSearchKeyword,
}) => (
  <div>
    <Card className="top-card flex-container flex-column" data-testid="top-card">
      <Stack direction="horizontal" gap={2}>
        <div className="image-container p-2" style={{ backgroundImage: `url(${backgroundImage})` }} data-testid="image-container" />
        <Stack gap={2} className="col-md-5 p-2 flex-end">
          <div className="top-title-container bold">
            <Card.Title className="top-title white-text ellipsis-multiline-2 p-2"><h2>{location}</h2></Card.Title>
            <Card.Title className="sub-text white-text bold p-2"><h2>{views}</h2></Card.Title>
          </div>
        </Stack>
      </Stack>
      <div className="footer-container fixed-footer">
        <Stack direction="horizontal" gap={2}>
          <Card.Footer className="white-text footer-text">
            {isSearchVisible ? (
              <div className="search-field-container">

                <SearchField isVisible={isSearchVisible} setSearchKeyword={setSearchKeyword} />

              </div>
            ) : (
              footerText
            )}
          </Card.Footer>
          <FontAwesomeIcon
            icon={isSearchVisible ? faXmark : faMagnifyingGlass}
            style={{ color: '#fff', cursor: 'pointer' }}
            onClick={toggleSearch}
          />

        </Stack>
      </div>
    </Card>
  </div>
);

TopCard.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  toggleSearch: PropTypes.func.isRequired,
  isSearchVisible: PropTypes.bool.isRequired,
  setSearchKeyword: PropTypes.func.isRequired,
};

export default TopCard;
