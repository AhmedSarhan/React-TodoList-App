import React from 'react';
import './TodoList.css';
// local imports
import DeleteBtn from '../Common/DeleteButtonSVG';
interface TodoListProps {
  todos: { id: string; text: string; done: boolean }[];
  onDelete: (todoId: string) => void;
  onFinish: (todoId: string) => void;
}
const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <div className="todos">
      {props.todos.map((todo) => {
        return (
          <div className={'single-todo'} key={todo.id}>
            <h3
              className={todo.done ? 'done' : ''}
              onClick={props.onFinish.bind(null, todo.id)}
            >
              {todo.text}
            </h3>
            <button onClick={props.onDelete.bind(null, todo.id)}>
              <DeleteBtn width="15px" height="15px" color="#ff3f34" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
