import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchData } from '../redux/home/homeSlice';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.home.home);
  const isLoading = useSelector((state) => state.home.isLoading);
  const error = useSelector((state) => state.home.error);

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
      {data.length > 0 ? (
        <div>
          {data.map((location) => (
            <div key={uuidv4()}>
              <h2>{location.location}</h2>
              <div>
                {location.measurements.map((metric) => (
                  <div key={uuidv4()}>
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
          ))}
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Home;
