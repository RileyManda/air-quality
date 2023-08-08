import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map1 from '../assets/images/map1.png';
import Map4 from '../assets/images/map4.png';
import { fetchData } from '../redux/home/homeSlice';

const Home = () => {
  const airQualityParameters = ['pm25'];
  const dispatch = useDispatch();
  const data = useSelector((state) => state.home.home);
  const isLoading = useSelector((state) => state.home.isLoading);
  const error = useSelector((state) => state.home.error);

  // eslint-disable-next-line max-len
  const filteredData = data.filter(({ measurements }) => measurements.some(({ parameter }) => airQualityParameters.includes(parameter)));

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    console.log('Data:', data);
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {' '}
        {error}
      </p>
    );
  }

  return (
    <div>
      <Card className="top-card">
        <div className="image-container" style={{ backgroundImage: `url(${Map1})` }} />
        <div className="top-title-container">
          <Card.Title className="top-title white-text"><h2>USA</h2></Card.Title>
          <Card.Title className="top-sub-text white-text"><h2>696 Views</h2></Card.Title>
        </div>
        <Card.Footer className="detail-text white-text">Stats by Air Quality</Card.Footer>
      </Card>

      <div className="card-container">
        <Row xs={1} sm={2} md={2} lg={2} className="g-4 no-gutters">
          {filteredData.length > 0 ? (
            filteredData.map((location) => (
              <Col key={uuidv4()} xs={6} sm={6} md={6} lg={6}>
                <Card className="content-card" style={{ backgroundImage: `url(${Map4})` }}>
                  <Card.Body
                    style={{ display: 'flex', flexDirection: 'column', fluid: true }}
                    className="card-content"
                  >
                    <Link to={`/details/${location.location}/${uuidv4()}`} style={{ textDecoration: 'none' }}>
                      <div className="card-info-container">
                        <Card.Title className="title-text white-text">
                          {' '}
                          {location.location}
                        </Card.Title>
                      </div>
                    </Link>
                    <div className="measurements-text white-text">
                      {location.measurements.map((metric) => {
                        if (airQualityParameters.includes(metric.parameter)) {
                          return (
                            <div key={uuidv4()}>
                              {metric.parameter}
                              :
                              {' '}
                              {metric.value}
                              {' '}
                              {metric.unit}
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No data available.</p>
          )}
        </Row>
      </div>
    </div>
  );
};

export default Home;
