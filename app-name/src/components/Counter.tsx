import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { minus, plus } from './store/todoSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button aria-label="Increment value" onClick={() => dispatch(plus())}>
        Increment
      </button>
      <span>{count}</span>
      <button aria-label="Decrement value" onClick={() => dispatch(minus())}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
