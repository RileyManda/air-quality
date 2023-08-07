import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { fetchData } from '../redux/home/homeSlice';

const Home = () => {
  const airQualityParameters = ['pm10', 'pm25', 'um005', 'um003', 'um010', 'um050', 'um100', 'um025', 'pm1'];

  const dispatch = useDispatch();
  const data = useSelector((state) => state.home.home);
  const isLoading = useSelector((state) => state.home.isLoading);
  const error = useSelector((state) => state.home.error);
  // Filter the data to include only air quality parameters
  // eslint-disable-next-line max-len
  const filteredData = data.filter((location) => location.measurements.some((metric) => airQualityParameters.includes(metric.parameter)));

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
      {filteredData.length > 0 ? (
        <div>
          {filteredData.map((location) => (
            <div key={uuidv4()}>
              <Link to={`/details/${location.location}/${uuidv4()}`} style={{ textDecoration: 'none' }}>
                <h2>{location.location}</h2>
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
            </div>
          ))}
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Home;
