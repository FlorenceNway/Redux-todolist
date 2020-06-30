import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeTodo} from '../../store/todos.actions';


const TodoList = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    console.log('todos', todos)

    const deleteHandler = (id) => {
        dispatch(removeTodo(id))
    }

  return (
    <ul>
      {todos.map(todo => (
          <li key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => deleteHandler(todo.id)}>Remove</button>
          </li>
      ))}
    </ul>
  );
}

export default TodoList;