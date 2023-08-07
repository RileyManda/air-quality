import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { location } = useParams();
  const data = useSelector((state) => state.home.home);

  const locationData = data.find((item) => item.location === location);

  useEffect(() => {
    window.history.pushState({}, '', '/detail');
    return () => {
      window.history.pushState({}, '', '/');
    };
  }, []);

  if (!locationData) {
    return <p>No data available for this location.</p>;
  }

  return (
    <div>
      <h2>{locationData.location}</h2>
      <div>
        {locationData.measurements.map((metric) => (
          <div key={metric.parameter}>
            {metric.parameter}
            :
            {' '}
            {metric.value}
            {' '}
            {metric.unit}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
