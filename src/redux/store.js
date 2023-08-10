import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './home/homeSlice';
import detailsReducer from './details/detailsSlice';
import notfoundReducer from './notfound/notfoundSlice';

const store = configureStore({
  reducer: {
    home: homeReducer,
    details: detailsReducer,
    notfound: notfoundReducer,
  },
});
export default store;
