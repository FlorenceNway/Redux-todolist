import React from 'react';
import {useSelector} from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos)
  console.log('todos', todos)

    const deleteHandler = () => {
        
    }

  return (
    <ul>
      {todos.map(todo => (
          <li key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={deleteHandler}>Remove</button>
          </li>
      ))}
    </ul>
  );
}

export default TodoList;