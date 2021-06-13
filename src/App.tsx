import React, { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { Todo } from "./todo.model"

function App() {
  const [todos, setsTodo] = useState<Todo[]>([]);
  // const todos = [{ id: 't1', text: 'Finish the course' }];


  const todoAddHandler = (text: string) => {
    console.log(text);
    setsTodo(prevTodos => [...prevTodos, { id: Math.random().toString(), text: text }])

  }
  const todoDeleteHandler = (todoId: string) => {
    setsTodo(prevTodos => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
