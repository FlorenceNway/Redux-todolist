let id = 1;

export const addTodo = (payload) => ({
    type: "ADD_ToDo",
    payload: {id: id++, payload }
});