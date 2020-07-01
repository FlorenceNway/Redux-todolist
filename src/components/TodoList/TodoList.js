import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeTodo} from '../../store/todos.actions';
import {completeTodo} from '../../store/todos.actions';
import './TodoList.css';


const TodoList = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    console.log(todos)

    const deleteHandler = (id) => {
        dispatch(removeTodo(id))
    }

    const completeHandler = (id) => {
        dispatch(completeTodo(id))
    }

  return (
    <ul>
      {todos.map(todo => (
          <li key={todo.id}>
              <input type='checkbox' onChange={() => completeHandler(todo.id)}/>
              <span>{todo.text}</span>
              <button onClick={() => deleteHandler(todo.id)}>Remove</button>
          </li>
      ))}
    </ul>
  );
}

export default TodoList;