import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Details from '../components/Details';

const mockStore = configureStore([]);

describe('Details Component', () => {
  const mockData = [
    {
      location: 'Location 1',
      measurements: [
        { parameter: 'pm25', value: 10, unit: 'ug/m3' },
        { parameter: 'temperature', value: 25, unit: 'C' },
      ],
    },
  ];

  it('should display "No data available" for unknown location', () => {
    const store = mockStore({
      home: {
        home: mockData,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/details/Unknown%20Location']}>
          <Routes>
            <Route path="/details/:location" element={<Details />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    const noDataMessage = screen.getByText('No data available for this location.');
    expect(noDataMessage).toBeInTheDocument();
  });
});
