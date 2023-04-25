interface Customer {
  id: number;
  title: string;
}

export type Data = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

interface AddCustomerAction {
  type: typeof ADD_CUSTOMER;
  payload: Customer;
}

export interface AddAsyncAction {
  type: typeof ADD_ASYNC;
  payload: Data[];
}

interface DeleteCustomerAction {
  type: typeof DELETE_CUSTOMER;
  payload?: Customer[];
}

const initial = {
  customers: [],
};

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const ADD_ASYNC = 'ADD_ASYNC';
const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

type CustomerActionTypes = AddCustomerAction | AddAsyncAction | DeleteCustomerAction;

const reducerCustomer = (state = initial, action: CustomerActionTypes) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case ADD_ASYNC:
      return { ...state, customers: [...state.customers, ...action.payload] };
    case DELETE_CUSTOMER:
      state.customers.pop();
      return { ...state, customers: [...state.customers] };
    default:
      return state;
  }
};
export const addCustomerAction = (payload: Customer): AddCustomerAction => ({
  type: ADD_CUSTOMER,
  payload,
});
export const deleteCustomer = (): DeleteCustomerAction => ({
  type: DELETE_CUSTOMER,
});
export const addAsyncCustomer = (payload: Data[]): AddAsyncAction => ({ type: ADD_ASYNC, payload });

export default reducerCustomer;
