import * as actionTypes from './constants'

const initState = {
    value: 0
}

const countReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.COUNT_INCREMENT:
            return {
                ...state,
                value: state.value + 1
            }
            break;
        case actionTypes.COUNT_DECREMENT:
            return {
                ...state,
                value: state.value - 1
            }
            break;
        default:
            return state
            break;
    }
}

export default countReducer;