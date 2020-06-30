
let initialState = {
    todos: []
}

const todos = (state = initialState, {type,payload}) => {
    switch(type) {
        case 'ADD_TODO':
            return {...state, todos: [...state.todos, payload]};
        case 'REMOVE_TODO':
            return {...state, todos: [...state.todos, payload]};
        default:
            return state;
    }
}

export default todos;