import React from 'react';
import TodoList from './components/TodoList/TodoList';
import TodoInput from './components/TodoInput/TodoInput';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <TodoInput/>
      <TodoList />
    </div>
  );
}

export default App;
