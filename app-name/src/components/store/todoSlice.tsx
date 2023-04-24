import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { List } from 'App';

interface TodoState {
  todos: List[];
  status: null | string;
  error: string | null;
}

export const fetchTodo = createAsyncThunk('todos/fetchTodo', async function () {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();

  return data;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: null,
    error: null,
  } as TodoState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      if (action.payload.trim() !== '') {
        state.todos.push({
          id: state.todos.length,
          title: action.payload,
          completed: false,
        });
      }
    },
    removeButton(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    completedButton(state, action) {
      const togleTodo = state.todos.find((item) => item.id === action.payload);
      if (togleTodo) {
        togleTodo.completed = !togleTodo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.todos = action.payload;
      })
      .addCase(fetchTodo.rejected, (state) => {
        state.status = 'reject';
      });
  },
});

export const counterTest = createSlice({
  name: 'count',
  initialState: { value: 0 },
  reducers: {
    plus(state) {
      state.value += 1;
    },
    minus(state) {
      state.value -= 1;
    },
  },
});
export const { plus, minus } = counterTest.actions;
export const { addTodo, removeButton, completedButton } = todoSlice.actions;
export default todoSlice.reducer;
