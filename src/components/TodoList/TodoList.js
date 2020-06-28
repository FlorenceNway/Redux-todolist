import React from 'react';
import {useSelector} from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos)
  console.log('todos', todos)

  return (
    <ul>
      {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;