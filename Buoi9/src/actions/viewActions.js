import actionTypes from "../constants/constants"

const openSidebar = () => {
    return {
        type: actionTypes.OPEN_SIDEBAR,
        payload: null
    }
}

const closeSidebar = () => {
    return {
        type: actionTypes.CLOSE_SIDEBAR,
        payload: null
    }
}

const toggleSidebar = () => {
    return {
        type: actionTypes.TOGGLE_SIDEBAR,
        payload: null
    }
}

const viewActions = {
    toggleSidebar
}

export default viewActions;