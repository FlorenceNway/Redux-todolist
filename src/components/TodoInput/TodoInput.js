import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../store/todos.actions';

const TodoInput = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("")

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(inputValue)) //dispatch expect to have object with type and payload props
        setInputValue('')
    }

    return (
        <form onSubmit={submitHandler}>
            <input type='text' onChange={handleChange} value={inputValue}/>
            <button type={'submit'}>Add</button>
        </form>
    )
}

export default TodoInput