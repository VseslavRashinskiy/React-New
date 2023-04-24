import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

type State = {
  value: number;
};

function App() {
  const count = useSelector((state: State) => state.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState<number>(1);

  const increment = () => {
    dispatch({ type: 'ADD', payload: incrementAmount });
  };

  const decrement = () => {
    dispatch({ type: 'DELETE', payload: incrementAmount });
  };
  return (
    <div className="App">
      <input
        type="number"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(+e.target.value)}
      />
      <button onClick={() => increment()}>+</button>
      <span>{count}</span>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
}

export default App;
