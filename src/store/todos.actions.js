let id = 1;

export const addTodo = (inputValue) => ({
    type: "ADD_TODO",
    payload: {id: id++, text: inputValue }
});

export const removeTodo = (id) => ({
    type: "REMOVE_TODO",
    payload: id
});