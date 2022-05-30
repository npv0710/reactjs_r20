import constants from "../constants/constants"

const initialStateUserInfo = {
    isLoading: false,
    user: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    },
    errorMessage: null,
    errorMessageGroup: null,
    errorMessageRegister: null,
    errorMessageSignin: null,
    listGroups: [],
    totalPagesListGroups: 0,
    updateCompleted: false,
    createdGroupSuccessfully: false,
    userToken: {},
    closeFormGroup: false
}

const userInfoReducer = (state = initialStateUserInfo, action) => {
    switch(action.type) {
        //User info
        case constants.GET_USRE_INFO_REUEST:
            return {...state, isLoading: true}
        case constants.GET_USRE_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload
            }
        case constants.GET_USRE_INFO_FAIL:
            return {...state, isLoading: false, errorMessage: action.payload}
        //List groups
        case constants.GET_LIST_GROUP_REUEST:
            return {...state, isLoading: true}
        case constants.GET_LIST_GROUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listGroups: action.payload.listGroups,
                totalPagesListGroups: action.payload.totalPagesListGroups
            }
        case constants.GET_LIST_GROUP_FAIL:
            return {...state, isLoading: false, errorMessageGroup: action.payload}
        
        //Register user
        case constants.REGISTER_USER_REUEST:
            return {...state, isLoading: true}
        case constants.REGISTER_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case constants.REGISTER_USER_FAIL:
            return {...state, isLoading: false, errorMessageRegister: action.payload}
        //Signin
        case constants.SIGNIN_REQUEST:
            return {...state, isLoading: true}
        case constants.SIGNIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userToken: action.payload
            }
        case constants.SIGNIN_FAIL:
            return {...state, isLoading: false, errorMessageRegister: action.payload}

        //Update group
        case constants.UPDATE_GROUP_REUEST:
            return {...state, isLoading: true}
        case constants.UPDATE_GROUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                updateCompleted: true,
                closeFormGroup: true
            }
        case constants.UPDATE_GROUP_FAIL:
            return {...state, isLoading: false, errorMessageGroup: action.payload}

        //Create group
        case constants.CREATE_GROUP_REUEST:
            return {...state, isLoading: true}
        case constants.CREATE_GROUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                createdGroupSuccessfully: true,
                closeFormGroup: true
            }
        case constants.CREATE_GROUP_FAIL:
            return {...state, isLoading: false, errorMessageGroup: action.payload}
        
        default:
            return state
        
    }
}

export {
    userInfoReducer
}