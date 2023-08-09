import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/Home';

const mockStore = configureStore([thunk]);

describe('Home Component', () => {
  it('should render loading spinner when isLoading is true', async () => {
    const store = mockStore({
      home: {
        home: [],
        isLoading: true,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    );

    await waitFor(() => {
      const loadingSpinner = screen.getByTestId('loading-spinner');
      expect(loadingSpinner).toBeInTheDocument();
    });
  });

  it('should render TopCard and content cards with filtered data', () => {
    const store = mockStore({
      home: {
        home: [],
        isLoading: false,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    );

    const topCard = screen.getByTestId('top-card');
    expect(topCard).toBeInTheDocument();

    const contentCards = screen.getAllByTestId('content-card');
    expect(contentCards.length).toBeGreaterThan(0);
  });
});
