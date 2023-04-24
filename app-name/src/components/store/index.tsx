import { createStore, combineReducers } from 'redux';
import reducer from './reducer';
import reducerCustomer from './reduserCustomer';

const rootReducer = combineReducers({
  counter: reducer,
  customers: reducerCustomer,
});

export const store = createStore(rootReducer);
