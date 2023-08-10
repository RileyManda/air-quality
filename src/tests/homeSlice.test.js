import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import homeReducer, { fetchData } from '../redux/home/homeSlice';

jest.mock('axios');
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [] })),
}));

const mockStore = configureMockStore([thunk]);

describe('homeSlice reducer', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      home: {
        home: [],
        isLoading: false,
        error: undefined,
      },
    });
  });

  it('should handle fetchData.fulfilled action', async () => {
    const fakeData = { results: [{ location: 'Location 1' }, { location: 'Location 2' }] };
    axios.get.mockResolvedValue({ data: fakeData });

    await store.dispatch(fetchData());

    const actions = store.getActions();
    const state = homeReducer(undefined, actions[1]);

    expect(actions[1].type).toEqual(fetchData.fulfilled.type);
    expect(state.isLoading).toBe(false);
    expect(state.home).toEqual(fakeData.results);
    expect(state.error).toBeUndefined();
  });

  it('should handle fetchData.rejected action', async () => {
    const mockError = new Error('Failed to fetch data.');
    axios.get.mockRejectedValue(mockError);

    await store.dispatch(fetchData());

    const actions = store.getActions();
    const state = homeReducer(undefined, actions[1]);

    expect(actions[1].type).toEqual(fetchData.rejected.type);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(mockError.message);
  });
});
