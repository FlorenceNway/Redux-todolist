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
      {todos.map(({id, text, complete}) => (
          <li key={id}>
              <input type='checkbox' onChange={() => completeHandler(id)}/>
              <span>{text}</span>
              <button onClick={() => deleteHandler(id)}>Remove</button>
          </li>
      ))}
    </ul>
  );
}

export default TodoList;