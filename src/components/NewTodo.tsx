import React, { useRef } from 'react';
import './NewTodo.css';

// local imports
import AddBtnSvg from './../Common/AddSvg';
interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}
const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };
  return (
    <form className="new-todo" onSubmit={todoSubmitHandler}>
      <div className="form-group">
        <label htmlFor="newTodo">Add a Todo</label>
        <input
          type="text"
          placeholder="what's on your mind"
          name="newTodo"
          id="newTodo"
          ref={textInputRef}
        />
      </div>
      <button type="submit">
        <AddBtnSvg width="25px" height="25px" color="#05c46b" />
      </button>
    </form>
  );
};

export default NewTodo;
