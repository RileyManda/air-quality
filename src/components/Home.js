import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fetchData } from '../redux/home/homeSlice';
import usaMap from '../assets/maps/world.svg';

const Home = () => {
  const airQualityParameters = ['pm10', 'pm25', 'um005', 'um003', 'um010', 'um050', 'um100', 'um025', 'pm1'];
  const dispatch = useDispatch();
  const data = useSelector((state) => state.home.home);
  const isLoading = useSelector((state) => state.home.isLoading);
  const error = useSelector((state) => state.home.error);
  // Filter the data to include only air quality parameters
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
    <Container>
      <Row>
        {filteredData.length > 0 ? (
          filteredData.map((location) => (
            <Col xs={6} key={uuidv4()} style={{ marginBottom: '20px' }}>
              <Card
                style={{
                  width: '100%', height: '100%', backgroundImage: `url(${usaMap})`, backgroundSize: 'cover',
                }}
              >
                <Card.Body>
                  <Link to={`/details/${location.location}/${uuidv4()}`} style={{ textDecoration: 'none' }}>
                    <Card.Title>{location.location}</Card.Title>
                  </Link>
                  <div>
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
    </Container>
  );
};

export default Home;
