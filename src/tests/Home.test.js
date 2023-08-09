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
  it('should render with correct props', () => {
    const store = mockStore({
      home: {
        home: [],
        isLoading: false,
        error: null,
      },
    });

    const backgroundImage = 'backgroundImageURL';
    const location = 'USA';
    const views = '890 Views';
    const footerText = 'Stats by air pressure';
    const toggleSearch = jest.fn();
    const isSearchVisible = false;
    const setSearchKeyword = jest.fn();

    render(
      <Provider store={store}>
        <Home
          backgroundImage={backgroundImage}
          location={location}
          views={views}
          footerText={footerText}
          toggleSearch={toggleSearch}
          isSearchVisible={isSearchVisible}
          setSearchKeyword={setSearchKeyword}
        />
      </Provider>,
    );

    const topCard = screen.getByTestId('top-card');
    expect(topCard).toBeInTheDocument();

    const topCardProps = topCard.querySelector('.top-card').props;
    expect(topCardProps.backgroundImage).toEqual(backgroundImage);
    expect(topCardProps.location).toEqual(location);
    expect(topCardProps.views).toEqual(views);
    expect(topCardProps.footerText).toEqual(footerText);
    expect(topCardProps.toggleSearch).toEqual(toggleSearch);
    expect(topCardProps.isSearchVisible).toEqual(isSearchVisible);
    expect(topCardProps.setSearchKeyword).toEqual(setSearchKeyword);
  });
});
