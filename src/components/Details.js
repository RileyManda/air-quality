import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TopCard from './TopCard';
import Map4 from '../assets/images/map4.svg';

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
      <TopCard
        backgroundImage={Map4}
        location={locationData.location}
        views="700 Views"
        footerText="CITY/TOWN BREAKDOWN-2013"
      />
      <div className="detail-list-container">
        {locationData.measurements.map((metric, index) => (
          <div key={metric.parameter} className={`card-detail ${index % 2 === 1 ? 'darker' : ''}`}>
            <div className="card-detail-label">
              {metric.parameter}
              :
            </div>
            <div className="card-detail-value">
              {metric.value}
              {' '}
              {metric.unit}
              <FontAwesomeIcon icon={faCircleRight} style={{ color: '#fff', marginLeft: '12px' }} />
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Details;
