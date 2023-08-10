/* eslint-disable max-len */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TopCard from './TopCard';
import Map4 from '../assets/images/map4.svg';

const Details = () => {
  const { location } = useParams();
  const data = useSelector((state) => state.home.home);

  const locationData = data.find((item) => item.location === location);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  if (!locationData) {
    return <p>No data available for this location.</p>;
  }

  const filteredMeasurements = locationData.measurements.filter((metric) => metric.parameter.toLowerCase().includes(searchKeyword.toLowerCase()));
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    if (!isSearchVisible) {
      setSearchKeyword('');
    }
  };

  return (
    <div>
      <TopCard
        backgroundImage={Map4}
        location={locationData.location}
        description="Air Quality Data"
        footerText="CITY/TOWN BREAKDOWN-2013"
        setSearchKeyword={setSearchKeyword}
        toggleSearch={toggleSearch}
        isSearchVisible={isSearchVisible}
      />
      <div className="flex-container flex-column">
        {filteredMeasurements.map((metric) => (
          <div
            key={uuidv4()}
            className="card-detail flex-container flex-row bold"
          >
            <div className="card-detail-label flex-container">
              {metric.parameter}
              :
            </div>
            <div className="card-detail-value">
              {metric.value}
              {' '}
              {metric.unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
