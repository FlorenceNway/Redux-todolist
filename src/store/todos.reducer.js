
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
            const moveUpTodos = [...state.todos]    
            const moveUpIndex = moveUpTodos.findIndex(Todo => Todo.id === payload)
            const selectedToMoveUp = moveUpTodos.splice(moveUpIndex,1) //get one item in an array
            moveUpTodos.splice(moveUpIndex - 1, 0, ...selectedToMoveUp) // spread it not to be array
            return {...state, todos: [...moveUpTodos]}
        case 'MOVEDOWN_TODO':
            const moveDownTodos = [...state.todos]    
            const moveDownIndex = moveDownTodos.findIndex(Todo => Todo.id === payload)
            const selectedToMoveDown = moveDownTodos.splice(moveDownIndex,1) //get one item in an array
            moveDownTodos.splice(moveDownIndex + 1, 0, ...selectedToMoveDown) // spread it not to be array
            return {...state, todos: [...moveDownTodos]}    
        default:
            return state;
    }
}

export default todos;