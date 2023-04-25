import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from './reducer';
import reducerCustomer from './reduserCustomer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  counter: reducer,
  customers: reducerCustomer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
