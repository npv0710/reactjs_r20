//import { Request, Response, NextFunction, response } from 'express'
import axios, { AxiosResponse } from 'axios'

// interface User {
//     id: number,
//     first_name: string,
//     last_name: string
// }

const demoAsync = async() => {
    console.log('Demo async funcion')
    let result = await new Promise((resolve, reject) => setTimeout(() => {
        console.log('processing...')
        resolve('finished')
    }, 3000))

    console.log(result)

}

const getPostAsync = async() => {
    const result : AxiosResponse = await axios.get( 'https://reqres.in/api/users')
    let users = result.data.data
    console.log(showUsers(users))
}

function showUsers(users) {
    return users.map(({id, first_name, last_name}) => ({id: id, full_name: first_name + ' ' + last_name}))
}

function callAPICreateUser() {
    console.log('Call API create user')
    return new Promise((resolve, reject) => setTimeout(() => {
        resolve('Create user successfully')
    }, 1000))
}

function callAPICreateGroup() {
    console.log('Call API crate group')
    return new Promise((resolve, reject) =>setTimeout(() => {
        resolve('Create group successfully')
    }, 2000))
}

function callAPIAddUserToGroup() {
    console.log('Call API add user to group')
    return new Promise((resolve, reject) =>setTimeout(() => {
        resolve('Add user to group successfully')
    }, 3000))
}

async function createAndAddUserToGroup() {
    let resultCreateUser = await callAPICreateUser()
    console.log(resultCreateUser)

    let resultCreateGroup = await callAPICreateGroup()
    console.log(resultCreateGroup)

    let resultAddUserToGroup = await callAPIAddUserToGroup()
    console.log(resultAddUserToGroup)
}

export {
    demoAsync,
    getPostAsync,
    createAndAddUserToGroup
}