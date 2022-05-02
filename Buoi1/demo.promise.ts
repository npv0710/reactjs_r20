//Call back function

import axios from "axios";
import { response } from "express";

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function login(username: string, password: string) {
    setTimeout(() => {
        if (username === 'Nguyen Van A' && password === '123abc') {
            console.log('Login successfully')
        }
    }, 2000)
    console.log('Please login first')
}

function login2(username: string, password: string, callback) {
    console.log('Please login first')
    setTimeout(() => {
        if (username === 'Nguyen Van A' && password === '123abc') {
            console.log('Login successfully')
        }
        callback(username)
    }, 2000)
}

const getPosts = () => {
    
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        request.onload = () => {
            if (request.status == 200) {
                resolve(request.responseText)
            }else {
                reject(Error(request.statusText))
            }
        }
        request.onerror = function() {
            reject(Error('Error fetching data.')); // error occurred, reject the  Promise
        }
        request.send()
    }).then(data => {
        console.log('resquest success & receive data: ')
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })

    // let result = axios.get(`https://jsonplaceholder.typicode.com/posts`)
    // result.then(response => {
    //     console.log(response.data)
    // })
}

const getUserInfo = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://tutorialzine.com/misc/files/example.json')
        .then(response => {
            //console.log(response.data)
            resolve(response.data)
        })
        .catch(error => reject(error))
    })
}

var first_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolved first after 1 second')
    }, 1000)
})

var second_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolved first after 2 seconds')
    }, 2000)
})

var third_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolved first after 3 seconds')
    }, 3000)
})

var combinePromises = () => {
    return Promise.all([first_promise, second_promise, third_promise])
        .then((data => console.log(data)))
        .catch(error => console.log(error))
}

function callApiCreateUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Call api create user')
            resolve('Create user successfully')
        }, 1000)
    })
}

function callApiCreateGroup() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Call api create group')
            resolve('Create group successfully')
        }, 2000)
    })
}

function callApiAddUserToGroup() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Call api add user to group')
            resolve('Add user to group')
        }, 3000)
    })
}

function createUserGroup () {
    callApiCreateUser()
    .then(data => {
        console.log(data)
        return callApiCreateGroup()
    }).then(data => {
        console.log(data)
        return callApiAddUserToGroup()
    }).then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
}

export {
    login,
    login2,
    getPosts,
    combinePromises,
    createUserGroup,
    getUserInfo
}