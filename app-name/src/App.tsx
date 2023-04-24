import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

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
  name: string;
};

function App() {
  const count = useSelector((state: State) => state.counter.value);
  const customers = useSelector((state: State) => state.customers.customers);

  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState<number>(1);
  const [customerName, setCustomerName] = useState<string>('');

  const increment = () => {
    dispatch({ type: 'ADD', payload: incrementAmount });
  };

  const decrement = () => {
    dispatch({ type: 'DELETE', payload: incrementAmount });
  };

  const addCustomer = (name: string) => {
    if (name.trim().length > 0) {
      const customer = {
        name,
        id: customers.length,
      };
      dispatch({ type: 'ADD-CUSTOMER', payload: customer });
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
        <button onClick={() => dispatch({ type: 'DELETE-CUSTOMER' })}>Deleted Last Customer</button>
        {customers.length > 0 ? (
          <div>
            {customers.map((el: Customer) => (
              <div key={el.id}>{el.name}</div>
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
