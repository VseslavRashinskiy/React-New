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
    case 'DELETE':
      return { ...state, value: state.value - action.payload };
    default:
      return state;
  }
};

export default reducer;
