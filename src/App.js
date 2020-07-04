import React from 'react';
import TodoList from './components/TodoList/TodoList';
import TodoInput from './components/TodoInput/TodoInput';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h2>To Do List</h2>
      <TodoInput/>
      <TodoList />
    </div>
  );
}

export default App;
