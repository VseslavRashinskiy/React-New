import React, { useState } from 'react';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsync } from 'components/store/customerReducer';
import { addCustomerAction, deleteCustomer } from 'components/store/reduserCustomer';

type State = {
  counter: {
    value: number;
  };
  customers: {
    customers: [];
  };
};

export type Customer = {
  id: number;
  title: string;
};

function App() {
  const count = useSelector((state: State) => state.counter.value);
  const customers = useSelector((state: State) => state.customers.customers) as Customer[];

  const dispatch = useDispatch<ThunkDispatch<State, object, AnyAction>>();
  const [incrementAmount, setIncrementAmount] = useState<number>(1);
  const [customerName, setCustomerName] = useState<string>('');

  const increment = () => {
    dispatch({ type: 'ADD', payload: incrementAmount });
  };

  const decrement = () => {
    dispatch({ type: 'DELETE', payload: incrementAmount });
  };

  const addCustomer = (title: string) => {
    if (title.trim().length > 0) {
      const customer = {
        title,
        id: customers.length,
      };
      dispatch(addCustomerAction(customer));
      setCustomerName('');
    }
  };

  return (
    <div className="App">
      <div>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(+e.target.value)}
        />
        <button onClick={() => increment()}>+</button>
        <span>{count}</span>
        <button onClick={() => decrement()}>-</button>
      </div>
      <div>
        <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
        <button onClick={() => addCustomer(customerName)}>Add Customer</button>
        <button onClick={() => dispatch(deleteCustomer())}>Deleted Last Customer</button>
        <button onClick={() => dispatch(fetchAsync())}>Async Customer</button>

        {customers.length > 0 ? (
          <div>
            {customers.map((el: Customer, index: number) => (
              <div key={index}>{el.title}</div>
            ))}
          </div>
        ) : (
          <div>Cancel</div>
        )}
      </div>
    </div>
  );
}

export default App;
