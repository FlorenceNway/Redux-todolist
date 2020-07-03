import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeTodo} from '../../store/todos.actions';
import {completeTodo, moveUp, moveDown} from '../../store/todos.actions';
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

    const moveUpHandler = (id) => {
      dispatch(moveUp(id))
    }

    const moveDownHandler = (id) => {
      dispatch(moveDown(id))
    }


  return (
    <ul>
      {todos.map(({id, text, complete}, index) => {
        const disableMoveDown = todos.length -1 === index
          return (<li key={id} className = {complete ? 'crossed' : "" }>
                    <input type='checkbox' onChange={() => completeHandler(id)}/>
                    <span>{text}</span>
                    <button onClick={() => deleteHandler(id)}>Remove</button>
                    <button onClick={() => moveUpHandler(id)} disabled={!index}>Up</button>
                    <button onClick={() => moveDownHandler(id)} disabled = {disableMoveDown}>Down</button>
                </li>)
      })}
    </ul>
  );
}

export default TodoList;