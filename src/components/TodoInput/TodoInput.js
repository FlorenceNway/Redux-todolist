import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

const TodoInput = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("")

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch({type:"ADD_TODO",payload: inputValue})
    }

    return (
        <form onSubmit={submitHandler}>
            <input type='text' onChange={handleChange} value={inputValue}/>
            <button type={'submit'}>Add</button>
        </form>
    )
}

export default TodoInput