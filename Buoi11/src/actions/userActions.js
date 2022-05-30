import axios from "axios"

import constants from "../constants/constants"

// const getUserInfo = (userId) => {
//     return async(dispath) => {
//         dispath({
//             type: constants.GET_USRE_INFO_REUEST
//         })

//         try {
//             const response = await axios.get('/api/accounts/' + userId)
//             dispath({
//                 type: constants.GET_USRE_INFO_SUCCESS,
//                 payload: response.data
//             })
//         }catch (error) {
//             dispath({
//                 type: constants.GET_USRE_INFO_FAIL,
//                 payload: {
//                     statusCode: error.response.sttaus,
//                     message: "Get user's info fail"
//                 }
//             })
//         }
//     }
// }

const token = localStorage.getItem('token')

const getUserInfo = (username) => async(dispath) => {
    dispath({
        type: constants.GET_USRE_INFO_REUEST
    })

    try {
        const response = await axios.get('/api/accounts/' + username, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        console.log(response)
        dispath({
            type: constants.GET_USRE_INFO_SUCCESS,
            payload: response.data
        })
    }catch (error) {
        console.log(error.response)
        let messageError = ''
        if (error.response.status == 401) {
            messageError = 'Unauthorized! Please login first to receive tokens'
        }else if (error.response.status == 500) {
            messageError = `Get user's info fail. Internal server error!`
        }else if (error.response.status == 403) {
            messageError = `You don not have permission to access / on the server. Forbidden!`
        }
        dispath({
            type: constants.GET_USRE_INFO_FAIL,
            payload: {
                statusCode: error.response.status,
                message: messageError
            }
        })
    }
}

const updateUserInfo = (user, avatarUploadFile) => async(dispatch) => {
    console.log('upload file: ')
    console.log(avatarUploadFile)

    dispatch({
        type: constants.UPDATE_USER_INFO_REQUEST
    })

    try {
        if (avatarUploadFile) {
            var formData = new FormData();
            formData.append("image", avatarUploadFile, avatarUploadFile.name);

            const responseUpload = await axios({
                method: 'POST',
                url: 'http://localhost:8888/api/files/image',
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                data : formData
            })
        }

        console.log('role of the user: ')
        console.log(JSON.parse(localStorage.getItem('role'))[0])

        const response = await axios({
            method: 'PUT',
            url: '/api/accounts/' + user.id,
            headers: {
                'Authorization': 'Bearer ' + token
            },
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                email: user.email,
                password: user.password,
                role: JSON.parse(localStorage.getItem('role'))[0],
                status: 'ACTIVE',
                avatarUrl: responseUpload ? responseUpload.data : ''
            }
        })

        if (response.error || responseUpload.error) {
            dispatch({
                type: constants.UPDATE_USER_INFO_FAIL,
                payload: response.error
            })
        }else {
            dispatch({
                type: constants.UPDATE_USER_INFO_SUCCESS,
                payload: response.data
            })
        }
        
    }catch (error) {
        dispatch({
            type: constants.UPDATE_USER_INFO_FAIL,
            payload: 'Update user info fail'
        })
        if (error.response) {
            //Request made and server responsed
            console.log(error.response.data)
            console.log(error.response.status)
        }else if (error.request) {
            //The request was made but no response was received
            console.log(error.request)
        }else {
            console.log('Error', error.message)
        }
    }
}



const registerUser = (user) => async(dispath) => {
    //console.log(user)
    dispath({
        type: constants.REGISTER_USER_REUEST
    })

    try {
        const response = await axios.post('/api/auth/signup', {
            ...user
        })
        dispath({
            type: constants.REGISTER_USER_SUCCESS,
            payload: response.data
        })

        window.location.replace('/sign-in')

    }catch (error) {
        dispath({
            type: constants.REGISTER_USER_FAIL,
            payload: {
                statusCode: error.response.status,
                message: "Rigister user fail!"
            }
        })
    }
}

const signin = (username, password) => async(dispath) => {
    dispath({
        type: constants.SIGNIN_REQUEST
    })

    try {
        const response = await axios.post('/api/auth/signin', {
            username: username,
            password: password
        })

        console.log('response action signin: ')
        console.log(response)

        //Save localStorage
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('username', response.data.username)
        localStorage.setItem('role', response.data.role)

        dispath({
            type: constants.SIGNIN_SUCCESS,
            payload: response.data
        })

        window.location.replace('/')

    }catch (error) {
        dispath({
            type: constants.SIGNIN_FAIL,
            payload: {
                statusCode: error.response.status,
                message: "Signin user fail!"
            }
        })
    }
}

const getListGroups = (groupFilterForm) => async(dispath) => {
    dispath({
        type: constants.GET_LIST_GROUP_REUEST
    })

    try {
        if (groupFilterForm) {
            let startDateConvert = null
            if (groupFilterForm.startDate != null) {
                startDateConvert =  groupFilterForm.startDate.getDate() + '/' + (groupFilterForm.startDate.getMonth() + 1) + '/' + groupFilterForm.startDate.getFullYear()
            }
            let endDateConvert = null
            if (groupFilterForm.endDate != null) {
                endDateConvert =  groupFilterForm.endDate.getDate() + '/' + (groupFilterForm.endDate.getMonth() + 1) + '/' + groupFilterForm.endDate.getFullYear()
            }

            startDateConvert = '2022-05-15 09:12:03'
            endDateConvert = '2022-05-20 09:27:15'

            let url = 'http://localhost:8888/api/groups/paging?' + 
            'pageNumber=' + groupFilterForm.pageNumber + '&size=' + groupFilterForm.pageSize + '&sort=' + groupFilterForm.sort + '&type=' +
            groupFilterForm.type + '&startDate=' + startDateConvert + '&endDate=' + endDateConvert

            // let url = 'http://localhost:8888/api/groups/paging'

            // console.log(groupFilterForm)

            // let data = {
            //     pageNumber: groupFilterForm.pageNumber,
            //     size: groupFilterForm.pageSize,
            //     sort: groupFilterForm.sort,
            //     type: groupFilterForm.type,
            //     startDate: groupFilterForm.startDate,
            //     endDate: groupFilterForm.endDate,
                
            // }

            const response = await axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                //data: JSON.stringify(data)
            })

            dispath({
                type: constants.GET_LIST_GROUP_SUCCESS,
                payload: {
                    listGroups: response.data.content,// Array group
                    totalPagesListGroups: response.data.totalPages 
                }
            })
        }else {
            let url = 'http://localhost:8888/api/groups'

            const response = await axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })

            dispath({
                type: constants.GET_LIST_GROUP_SUCCESS,
                payload: {
                    listGroups: response.data,
                    totalPagesListGroups: response.data.length // Array group
                }
            })
        }
    }catch (error) {
        dispath({
            type: constants.GET_LIST_GROUP_FAIL,
            payload: {
                statusCode: error.response.status,
                message: "Get list groups fail"
            }
        })
    }
}

const updateGroup = (groupItem) => async(dispath) => {
    console.log(groupItem)
    dispath({
        type: constants.UPDATE_GROUP_REUEST
    })

    try {
        const response = await axios({
            url: '/api/groups?id=' + groupItem.id,
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                name: groupItem.name,
                type: groupItem.type,
                createdAt: groupItem.createdAt,
                totalMember: groupItem.totalMember    
            })
        })

        console.log(response.data)

        dispath({
            type: constants.UPDATE_GROUP_SUCCESS,
            payload: response.data
        })
    }catch (error) {
        dispath({
            type: constants.UPDATE_GROUP_FAIL,
            payload: {
                statusCode: error.response.status,
                message: "Update group fail!"
            }
        })
    }
}

const creatingGroup = (groupItem) => async(dispath) => {
    console.log('create group: ')
    console.log(groupItem)
    dispath({
        type: constants.CREATE_GROUP_REUEST
    })

    try {
        const response = await axios({
            url: '/api/groups',
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                name: groupItem.name,
                type: groupItem.type,
                createdAt: groupItem.createdAt,
                totalMember: groupItem.totalMember
            })
        })

        console.log(response.data)

        dispath({
            type: constants.CREATE_GROUP_SUCCESS,
            payload: response.data
        })
    }catch (error) {
        dispath({
            type: constants.CREATE_GROUP_FAIL,
            payload: {
                statusCode: error.response.status,
                message: "Create group fail!"
            }
        })
    }
}

const userActions = {
    getUserInfo,
    updateUserInfo,
    getListGroups,
    registerUser,
    creatingGroup,
    updateGroup,
    signin
}

export default userActions