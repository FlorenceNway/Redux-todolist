
let initialState = {
    todos: []
}

const todos = (state = initialState, {type,payload}) => {
    switch(type) {
        case 'ADD_TODO':
            return {...state, todos: [...state.todos, payload]};
        case 'REMOVE_TODO':
            const filterdToDos = state.todos.filter(todo => todo.id !== payload)
            return {...state, todos: [...filterdToDos]};
        case 'COMPLETE_TODO':
            const localTodos = [...state.todos]    
            const todoIndex = localTodos.findIndex(localTodo => localTodo.id === payload)
            localTodos[todoIndex].complete = !localTodos[todoIndex].complete
            return {...state, todos: [...localTodos]}
        case 'MOVEUP_TODO':
            const cloneTodos = [...state.todos]    
            const moveIndex = cloneTodos.findIndex(Todo => Todo.id === payload)
            const selectedTodo = cloneTodos.splice(moveIndex,1) //get one item in an array
            cloneTodos.splice(moveIndex - 1, 0, ...selectedTodo) // spread it not to be array
            return {...state, todos: [...cloneTodos]}
        
        default:
            return state;
    }
}

export default todos;