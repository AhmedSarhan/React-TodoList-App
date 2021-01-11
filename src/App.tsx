// react imports
import React, { useState, useEffect } from 'react';
import './index.css';

// local imports
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
  let dummyTodos: any[] = [
    {
      id: (Math.random() * 1000).toString(),
      text: 'Buy the Groceries',
      done: false,
    },
    {
      id: (Math.random() * 1000).toString(),
      text: 'Watch a Movie',
      done: false,
    },
    {
      id: (Math.random() * 1000).toString(),
      text: 'Take my Morning Run',
      done: true,
    },
    {
      id: (Math.random() * 1000).toString(),
      text: 'Have BreakFast',
      done: true,
    },
  ];
  const localData: any = localStorage.getItem('todos');
  const todos: any[] = localData ? JSON.parse(localData) : dummyTodos;

  const [todosSTate, setTodosState] = useState(todos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todosSTate));
  }, [todosSTate]);
  const newTodoAddHandler = (text: string) => {
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
  const removeAllDoneHandler = () => {
    const allTodos = [...todosSTate];
    let undoneTodos = allTodos.filter((todo) => {
      return todo.done === false;
    });
    console.log(undoneTodos);
    setTodosState(undoneTodos);
  };
  const removeAllHandler = () => {
    setTodosState([]);
  };
  return (
    <div className="App">
      <h4>My TodoList App with ReactTS</h4>
      <NewTodo onAddTodo={newTodoAddHandler} />
      <TodoList
        todos={todosSTate}
        onDelete={deleteTodoHandler}
        onFinish={doneTodoHandler}
      />
      {todosSTate.length > 0 && (
        <div>
          <button
            onClick={removeAllDoneHandler}
            style={{
              backgroundColor: '#c0392b',
              color: '#fff',
              padding: '5px 15px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              margin: '10px',
              display: 'inline-block',
            }}
          >
            Remove Done Todos
          </button>
          <button
            onClick={removeAllHandler}
            style={{
              backgroundColor: '#2c3e50',
              color: '#fff',
              padding: '5px 15px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              margin: '10px',
              display: 'inline-block',
            }}
          >
            Remove ALL Todos
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
