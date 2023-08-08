import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Map1 from '../assets/images/map1.png';

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
      <Card className="top-card">
        <div className="image-container" style={{ backgroundImage: `url(${Map1})` }} />
        <div className="detail-title-container">
          <Card.Title className="detail-top-title white-text"><h2>{locationData.location}</h2></Card.Title>
          <Card.Title className="detail-sub-text white-text"><h2>{locationData.country}</h2></Card.Title>
        </div>
        <Card.Footer className="detail-text white-text">City/Town BREAKDOWN-2023</Card.Footer>
      </Card>
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
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Details;
