let id = 1;

export const addTodo = (inputValue) => ({
    type: "ADD_ToDo",
    payload: {id: id++, text: inputValue }
});

export const removeTodo = (id) => ({
    type: "REMOVE_ToDo",
    payload: id
});