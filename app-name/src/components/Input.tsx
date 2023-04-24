import React from 'react';

const Input = (props: {
  text: string;
  setText: (arg0: string) => void;
  addList: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <div>
      <label htmlFor="todo">ToDo List: </label>
      <input
        type="text"
        value={props.text}
        id="todo"
        onChange={(e) => props.setText(e.target.value)}
      ></input>
      <button onClick={props.addList}>Add</button>
    </div>
  );
};

export default Input;
