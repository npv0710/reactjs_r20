import * as actionTypes from './constants';

const addTodo = todo => {
    return {
        type: actionTypes.ADD_TODO,
        payload: todo
    }
}

const actions = {
    addTodo
}
export default actions;