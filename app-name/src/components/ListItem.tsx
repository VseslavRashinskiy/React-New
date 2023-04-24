import { List } from 'App';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeButton, completedButton } from '../components/store/todoSlice';

const ListItem = ({ el }: { el: List }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={el.completed}
        onChange={() => dispatch(completedButton(el.id))}
      />
      <span>{el.title}</span>
      <span
        onClick={() => dispatch(removeButton(el.id))}
        style={{ color: 'red', cursor: 'pointer' }}
      >
        &times;
      </span>
    </li>
  );
};

export default ListItem;
