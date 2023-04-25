import { ThunkDispatch } from 'redux-thunk';
import { addAsyncCustomer, AddAsyncAction, Data } from './reduserCustomer';

export const fetchAsync = () => {
  return function (dispatch: ThunkDispatch<object, object, AddAsyncAction>) {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json: Data[]) => dispatch(addAsyncCustomer(json)));
  };
};
