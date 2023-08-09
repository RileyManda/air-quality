import React from 'react';
import PropTypes from 'prop-types';

const SearchField = ({ isVisible, setSearchKeyword }) => {
  if (!isVisible) {
    return null;
  }

  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <div>
      <div className="search-field">
        <input
          type="text"
          placeholder="Filter"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

SearchField.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setSearchKeyword: PropTypes.func.isRequired,
};

export default SearchField;
