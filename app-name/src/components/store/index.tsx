import { createStore } from 'redux';

type Action = {
  type: string;
  payload: number;
};

const initial = {
  value: 0,
};

const reducer = (state = initial, action: Action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, value: state.value + action.payload };
      break;
    case 'DELETE':
      return { ...state, value: state.value - action.payload };
    default:
      return state;
  }
};

export const store = createStore(reducer);
