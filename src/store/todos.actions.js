let id = 1;

export const addTodo = (payload) => ({
    type: "ADD_ToDo",
    payload: {id: id++, text: payload }
});

export const removeTodo = (id) => ({
    type: "REMOVE_ToDo",
    payload: id
});