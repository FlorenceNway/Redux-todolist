import React from 'react';

const TodoInput = () => {

    const [inputValue, setInputValue] = useState("")

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input type='text' onChange={handleChange} value={inputValue}/>
            <button type={'submit'}>Add</button>
        </form>
    )
}

export default TodoInput