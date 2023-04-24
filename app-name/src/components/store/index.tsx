import { configureStore } from '@reduxjs/toolkit';
import todoReducer, { counterTest } from './todoSlice';

const store = configureStore({
  reducer: {
    list: todoReducer,
    counter: counterTest.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
