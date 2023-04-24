import { List } from 'App';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';
import React from 'react';
import { RootState } from './store';

const ListToDo = () => {
  const todos: List[] = useSelector((state: RootState) => state.list.todos);
  return (
    <ul style={{ listStyle: 'none' }}>
      {todos.map((el: List) => (
        <ListItem key={el.id} el={el} />
      ))}
    </ul>
  );
};

export default ListToDo;
