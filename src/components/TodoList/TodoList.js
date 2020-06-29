import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {deleteToDo} from '../../store/todos.action'

const TodoList = () => {
    const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  console.log('todos', todos)

    const deleteHandler = (id) => {
        dispatch(deleteToDo(id))
    }

  return (
    <ul>
      {todos.map(todo => (
          <li key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => deleteHandler(id)}>Remove</button>
          </li>
      ))}
    </ul>
  );
}

export default TodoList;