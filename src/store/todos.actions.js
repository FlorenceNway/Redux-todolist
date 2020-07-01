let id = 1;

export const addTodo = (inputValue) => ({
    type: "ADD_TODO",
    payload: {id: id++, text: inputValue, complete: false }
});

export const removeTodo = (id) => ({
    type: "REMOVE_TODO",
    payload: id
});

export const completeTodo = (id) => ({
    type: "COMPLETE_TODO",
    payload: id
});