// react imports
import React, { useState, useEffect } from 'react';
import './index.css';

// local imports
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
const todos = [
  { id: 't1', text: 'Finish the module', done: false },
  { id: 't2', text: 'have lunch', done: false },
  { id: 't3', text: 'play games', done: false },
  { id: 't4', text: 'go to bed', done: false },
];
const App: React.FC = () => {
  const [todosSTate, setTodosState] = useState(todos);

  const todoAddHandler = (text: string) => {
    setTodosState((prevTodos) => [
      ...prevTodos,
      { id: (Math.random() * 1000).toString(), text: text, done: false },
    ]);
  };
  const deleteTodoHandler = (todoId: string) => {
    setTodosState((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };
  const doneTodoHandler = (todoId: string) => {
    let dummyTodos = [...todosSTate];
    const index = dummyTodos.findIndex((todo) => {
      return todo.id === todoId;
    });
    dummyTodos[index].done = !dummyTodos[index].done;
    setTodosState(dummyTodos);
  };
  return (
    <div className="App">
      <h4>My TodoList App with ReactTS</h4>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList
        todos={todosSTate}
        onDelete={deleteTodoHandler}
        onFinish={doneTodoHandler}
      />
    </div>
  );
};

export default App;
