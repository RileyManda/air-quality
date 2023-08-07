import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import bgImage from '../assets/images/world.svg';

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
        <div className="image-container" style={{ backgroundImage: `url(${bgImage})` }} />
        <div className="image-content">
          <Card.Title className="top-card-title white-text"><h2>{locationData.location}</h2></Card.Title>
        </div>
        <Card.Footer className="detail-text">City/Town BREAKDOWN-2023</Card.Footer>
      </Card>
      <div className="detail-list">
        {locationData.measurements.map((metric, index) => (
          <div key={metric.parameter} className={`card-detail ${index % 2 === 1 ? 'darker' : ''}`}>
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
