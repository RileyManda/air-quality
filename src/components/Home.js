import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Col from 'react-bootstrap/Col';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import Map1 from '../assets/images/map1.svg';
import Map2 from '../assets/images/map2.svg';
import { fetchData } from '../redux/home/homeSlice';
import TopCard from './TopCard';

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
      <TopCard
        backgroundImage={Map1}
        location="USA"
        views="890 Views"
        footerText="Stats by air preassure"

      />
      <div className="card-container">
        <Row xs={1} sm={2} md={2} lg={2} className="g-4 no-gutters">
          {filteredData.length > 0 ? (
            filteredData.map((location, index) => {
              const measurementKey = uuidv4();
              return (
                <Col key={uuidv4()} xs={6} sm={6} md={6} lg={6}>
                  <Link to={`/details/${location.location}/${uuidv4()}`} style={{ textDecoration: 'none' }}>
                    <Card className={`content-card ${index % 2 === 1 ? 'darker' : ''}`} style={{ backgroundImage: `url(${Map2})` }}>
                      <Card.Header className="position-absolute top-0 end-0">
                        <FontAwesomeIcon icon={faCircleRight} style={{ color: '#fff' }} />
                      </Card.Header>
                      <Card.Body
                        style={{ display: 'flex', flexDirection: 'column', fluid: true }}
                        className="card-content"
                      >

                        <div className="card-info-container">
                          <Card.Title className="title-text white-text">
                            {' '}
                            {location.location}
                          </Card.Title>
                        </div>
                        <div className="measurements-text white-text">
                          {location.measurements.map((metric) => {
                            if (airQualityParameters.includes(metric.parameter)) {
                              return (
                                <div key={measurementKey} className="measurements-item">
                                  {metric.parameter}
                                  {' '}
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
                  </Link>
                </Col>
              );
            })
          ) : (
            <p>No data available.</p>
          )}
        </Row>
      </div>
    </div>
  );
};

export default Home;
