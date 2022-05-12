import axios from 'axios';
import { XMLHttpRequest } from 'xmlhttprequest-ts';

//var XMLHttpRequest = require('xmlhttprequest');

const getPost = () => {
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

function resolveTimeout(value, delay) {
    return new Promise(resolve => setTimeout(() => resolve(value), delay))
}

function rejectTimeout(message, delay) {
    return new Promise((resolve, reject) => setTimeout(() => reject(message), delay))
}

const demoPromiseAllSettled = () => Promise.allSettled([
    rejectTimeout(['Bad request'], 2000),
    resolveTimeout(['user', 'group'], 5000)
])

const demoPromiseAll = () => Promise.all([
    resolveTimeout(['user', 'group'], 5000),
    rejectTimeout(['Bad request'], 2000)
])

const testPromiseAllSettled = () => {
    let i = 1
    console.log('count variable: ' + i)

    let interval = setInterval(() => {
        if (i <= 5) {
            i ++
            console.log('count variable: ' + i)
        }else {
            clearInterval(interval)
        }
    }, 1000)

    demoPromiseAllSettled().then(data => console.log(data))
}

const testPromiseAll = () => {
    let i = 1
    console.log('count variable: ' + i)

    let interval = setInterval(() => {
        if (i <= 5) {
            i ++
            console.log('count variable: ' + i)
        }else {
            clearInterval(interval)
        }
    }, 1000)

    demoPromiseAll()
    .then(data => console.log(data))
    .catch(error => console.log(error))
}


export {
    getPost,
    getUserInfo,
    combinePromise,
    testPromiseAllSettled,
    testPromiseAll
}

