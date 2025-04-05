import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import { thunk } from 'redux-thunk';

let store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
