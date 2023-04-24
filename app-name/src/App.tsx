import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from './components/store/index';
import { addTodo, fetchTodo } from './components/store/todoSlice';
import Input from 'components/Input';
import ListToDo from 'components/List';
import Counter from 'components/Counter';

export interface List {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [text, setText] = useState('');
  const dispatch: AppDispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo(text));
    setText('');
  };

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <div className="App">
      <Counter />
      <Input text={text} addList={addTask} setText={setText} />
      <ListToDo />
    </div>
  );
}

export default App;
