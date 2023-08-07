import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fetchData } from '../redux/home/homeSlice';
import { TopCard, ContentCard, MeasurementData } from './styledComponents';

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
      <TopCard>
        <Card.Body>
          <Card.Title>Views</Card.Title>
          <Card.Text>
            Location
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Stats by Air Quality</Card.Footer>
      </TopCard>
      <Row xs={1} sm={2} md={2} lg={2} className="g-4 no-gutters">
        {filteredData.length > 0 ? (
          filteredData.map((location) => (
            <Col key={uuidv4()} xs={6} sm={6} md={6} lg={6}>
              <ContentCard>
                <Card.Body
                  className="card-body"
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <Link to={`/details/${location.location}/${uuidv4()}`} style={{ textDecoration: 'none' }}>
                    <Card.Title className="card-title">{location.location}</Card.Title>
                  </Link>
                  <MeasurementData>
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
                  </MeasurementData>
                </Card.Body>
              </ContentCard>
            </Col>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </Row>
    </div>
  );
};

export default Home;
