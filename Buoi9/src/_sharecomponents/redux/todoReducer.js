import * as actionTypes from './constants'
import listTodos from '../../data/todos.js';

const initState = {
    todos: listTodos
}

const todoReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
            break;
        default:
            return state
            break;
    }
}

export default todoReducer;