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

        //reject('Error!')
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
   
    if (resultCreateUser !== 'Create group successfully') {
        console.log('Loi roi');
        console.log('Dong chuong trinh');
        return;
    }

    let resultCreateGroup = await callAPICreateGroup()
    console.log(resultCreateGroup)

    let resultAddUserToGroup = await callAPIAddUserToGroup()
    console.log(resultAddUserToGroup)
}

const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function printCounter(i : number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('current value: ' + i)
            resolve(i)
        }, (5 - i) * 1000)
    })

    //return sleep(1000 * (5-i)).then(v => console.log('current value: ' + i))
}

async function testAsyncLoop() {
    for (let i :number = 1; i < 4; i ++) {
        console.log('i: ' + i)
        await printCounter(i)
    }
}

export {
    demoAsync,
    getPostAsync,
    createAndAddUserToGroup,
    testAsyncLoop
}