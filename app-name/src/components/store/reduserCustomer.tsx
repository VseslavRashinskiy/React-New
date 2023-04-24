import { Customer } from 'App';

type Action = {
  type: string;
  payload: Customer;
};

const initial = {
  customers: [],
};

const reducerCustomer = (state = initial, action: Action) => {
  switch (action.type) {
    case 'ADD-CUSTOMER':
      return { ...state, customers: [...state.customers, action.payload] };
    case 'DELETE-CUSTOMER':
      state.customers.pop();
      return { ...state, customers: [...state.customers] };
    default:
      return state;
  }
};

export default reducerCustomer;
