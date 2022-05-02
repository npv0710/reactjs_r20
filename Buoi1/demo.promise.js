"use strict";
//Call back function
exports.__esModule = true;
exports.getUserInfo = exports.createUserGroup = exports.combinePromises = exports.getPosts = exports.login2 = exports.login = void 0;
var axios_1 = require("axios");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function login(username, password) {
    setTimeout(function () {
        if (username === 'Nguyen Van A' && password === '123abc') {
            console.log('Login successfully');
        }
    }, 2000);
    console.log('Please login first');
}
exports.login = login;
function login2(username, password, callback) {
    console.log('Please login first');
    setTimeout(function () {
        if (username === 'Nguyen Van A' && password === '123abc') {
            console.log('Login successfully');
        }
        callback(username);
    }, 2000);
}
exports.login2 = login2;
var getPosts = function () {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
        request.onload = function () {
            if (request.status == 200) {
                resolve(request.responseText);
            }
            else {
                reject(Error(request.statusText));
            }
        };
        request.onerror = function () {
            reject(Error('Error fetching data.')); // error occurred, reject the  Promise
        };
        request.send();
    }).then(function (data) {
        console.log('resquest success & receive data: ');
        console.log(data);
    })["catch"](function (error) {
        console.log(error);
    });
    // let result = axios.get(`https://jsonplaceholder.typicode.com/posts`)
    // result.then(response => {
    //     console.log(response.data)
    // })
};
exports.getPosts = getPosts;
var getUserInfo = function () {
    return new Promise(function (resolve, reject) {
        axios_1["default"].get('https://tutorialzine.com/misc/files/example.json')
            .then(function (response) {
            //console.log(response.data)
            resolve(response.data);
        })["catch"](function (error) { return reject(error); });
    });
};
exports.getUserInfo = getUserInfo;
var first_promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Resolved first after 1 second');
    }, 1000);
});
var second_promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Resolved first after 2 seconds');
    }, 2000);
});
var third_promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Resolved first after 3 seconds');
    }, 3000);
});
var combinePromises = function () {
    return Promise.all([first_promise, second_promise, third_promise])
        .then((function (data) { return console.log(data); }))["catch"](function (error) { return console.log(error); });
};
exports.combinePromises = combinePromises;
function callApiCreateUser() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Call api create user');
            resolve('Create user successfully');
        }, 1000);
    });
}
function callApiCreateGroup() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Call api create group');
            resolve('Create group successfully');
        }, 2000);
    });
}
function callApiAddUserToGroup() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Call api add user to group');
            resolve('Add user to group');
        }, 3000);
    });
}
function createUserGroup() {
    callApiCreateUser()
        .then(function (data) {
        console.log(data);
        return callApiCreateGroup();
    }).then(function (data) {
        console.log(data);
        return callApiAddUserToGroup();
    }).then(function (data) {
        console.log(data);
    })["catch"](function (error) {
        console.log(error);
    });
}
exports.createUserGroup = createUserGroup;
