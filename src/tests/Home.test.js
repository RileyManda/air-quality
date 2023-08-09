import React from 'react';
import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Home from '../components/Home';

const mockStore = configureStore([]);

describe('Home Component', () => {
  it('should render loading spinner when isLoading is true', async () => {
    const mockState = {
      home: {
        home: [],
        isLoading: true,
        error: null,
      },
    };

    const store = mockStore({
      home: mockState.home,
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    const loadingSpinner = screen.getByRole('status');
    expect(loadingSpinner).toBeInTheDocument();
  });

  it('should render error message on error', async () => {
    const mockState = {
      home: {
        home: [],
        isLoading: false,
        error: 'Data fetching failed',
      },
    };

    const store = mockStore({
      home: mockState.home,
    });

    axios.get.mockRejectedValueOnce(new Error('Data fetching failed'));

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    const errorMessage = await screen.findByText('Error: Data fetching failed');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should render cards with mock data', async () => {
    const mockState = {
      home: {
        home: [
          {
            location: 'Location 1',
            measurements: [
              { parameter: 'pm25', value: 10 },
            ],
          },
        ],
        isLoading: false,
        error: null,
      },
    };

    const store = mockStore({
      home: mockState.home,
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    await waitFor(() => {
      const cards = screen.getAllByRole('link');
      expect(cards).toHaveLength(mockState.home.home.length);
    });
  });
});
