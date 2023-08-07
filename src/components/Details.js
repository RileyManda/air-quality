import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { location, key } = useParams();
  const data = useSelector((state) => state.home.home);

  const locationData = data.find((item) => item.location === location);

  if (!locationData) {
    return <p>No data available for this location.</p>;
  }

  return (
    <div key={key}>
      <h2>{locationData.location}</h2>
      <div>
        <h3>Measurements:</h3>
        {locationData.measurements.map((measurement) => (
          <div key={measurement.parameter}>
            <p>
              {measurement.parameter}
              :
              {' '}
              {measurement.value}
              {' '}
              {measurement.unit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
