import { resolve } from "path"
import axios from 'axios'

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const getPost = () => {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest()

        request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1')

        request.onload = () => {
            if (request.status == 200) {
                //resolve(request.responseText)
            }else {
                //reject(Error(request.statusText))
            }
        }

        request.onerror = function() {
            reject(Error('Error fetching data.'))
        }

        request.send()
    }).then(data => {
        console.log('request success & data received: ')
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
}

const getPost1 = () => {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest()

        request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1')

        request.onload = () => {
            if (request.status == 200) {
                resolve(request.responseText)
            }else {
                reject(Error(request.statusText))
            }
        }

        request.onerror = function() {
            reject(Error('Error fetching data.'))
        }

        request.send()
    })
    // .then(data => {
    //     console.log('request success & data received: ')
    //     console.log(data)
    // })
    // .catch(error => {
    //     console.log(error)
    // })
}


var getPost2 = () => {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest()

        request.open('GET', 'https://jsonplaceholder.typicode.com/posts/2')

        request.onload = () => {
            if (request.status == 200) {
                resolve(request.responseText)
            }else {
                reject(Error(request.statusText))
            }
        }

        request.onerror = function() {
            reject(Error('Error fetching data.'))
        }

        request.send()
    })
    // .then(data => {
    //     console.log('request success & data received: ')
    //     console.log(data)
    // })
    // .catch(error => {
    //     console.log(error)
    // })
}


const combinePromise = () => {
    return Promise.all([getPost1(), getPost2()])
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

const getUserInfo = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(reponse => {
            resolve(reponse.data)
        })
        .catch(error => {
            console.error(error)
            reject('Get data fail')
        })
    })
}

export {
    getPost,
    getUserInfo,
    combinePromise
}

