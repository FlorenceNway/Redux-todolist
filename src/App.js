import React from 'react';
import {useSelector} from 'react-redux';
import './App.css';

const App = () => {
  const todos = useSelector(state => state.todos)
  console.log('todos', todos)

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
