/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Col from 'react-bootstrap/Col';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import Stack from 'react-bootstrap/Stack';
import Map1 from '../assets/images/map1.svg';
import Map2 from '../assets/images/map2.svg';
import { fetchData } from '../redux/home/homeSlice';
import TopCard from './TopCard';
import LoadingSpinner from './Spinner';

const Home = () => {
  const airQualityParameters = ['pm25'];
  const dispatch = useDispatch();
  const data = useSelector((state) => state.home.home);
  const isLoading = useSelector((state) => state.home.isLoading);
  const error = useSelector((state) => state.home.error);

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  const filteredData = data.filter(({ measurements }) => measurements.some(({ parameter }) => airQualityParameters.includes(parameter)));
  const filteredLocations = filteredData.filter((location) => location.location.toLowerCase().includes(searchKeyword.toLowerCase()));

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    if (!isSearchVisible) {
      setSearchKeyword('');
    }
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
  }, [data]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <p className="white-text">
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
        toggleSearch={toggleSearch}
        isSearchVisible={isSearchVisible}
        setSearchKeyword={setSearchKeyword}
      />
      <Stack direction="horizontal" gap={1}>
        <Row xs={1} sm={2} md={2} lg={2} className="g-4 no-gutters p-2">
          {filteredLocations.length > 0 ? (
            filteredLocations.map((location, index) => {
              const measurementKey = uuidv4();
              return (
                <Col key={uuidv4()} xs={6} sm={6} md={6} lg={6}>
                  <Link to={`/details/${location.location}/${uuidv4()}`} style={{ textDecoration: 'none' }}>
                    <Card className={`content-card flex-container flex-column bold no-border flex-end ${index % 2 === 1 ? 'darker' : ''}`} style={{ backgroundImage: `url(${Map2})` }}>
                      <Card.Header className="position-absolute top-0 end-0">
                        <FontAwesomeIcon icon={faCircleRight} style={{ color: '#fff' }} />
                      </Card.Header>
                      <Card.Body
                        style={{ display: 'flex', flexDirection: 'column', fluid: true }}
                        className="card-content flex-container flex-column"
                      >

                        <div className="card-info-container flex-container flex-column">
                          <Card.Title className="title-text white-text bold ellipsis- multiline-2">
                            {' '}
                            {location.location}
                          </Card.Title>
                        </div>
                        <div className="measurements-text white-text wrap-break">
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
      </Stack>
    </div>
  );
};

export default Home;
