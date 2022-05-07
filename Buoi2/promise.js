"use strict";
exports.__esModule = true;
exports.combinePromise = exports.getUserInfo = exports.getPost = void 0;
var axios_1 = require("axios");
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var getPost = function () {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
        request.onload = function () {
            if (request.status == 200) {
                //resolve(request.responseText)
            }
            else {
                //reject(Error(request.statusText))
            }
        };
        request.onerror = function () {
            reject(Error('Error fetching data.'));
        };
        request.send();
    }).then(function (data) {
        console.log('request success & data received: ');
        console.log(data);
    })["catch"](function (error) {
        console.log(error);
    });
};
exports.getPost = getPost;
var getPost1 = function () {
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
            reject(Error('Error fetching data.'));
        };
        request.send();
    });
    // .then(data => {
    //     console.log('request success & data received: ')
    //     console.log(data)
    // })
    // .catch(error => {
    //     console.log(error)
    // })
};
var getPost2 = function () {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', 'https://jsonplaceholder.typicode.com/posts/2');
        request.onload = function () {
            if (request.status == 200) {
                resolve(request.responseText);
            }
            else {
                reject(Error(request.statusText));
            }
        };
        request.onerror = function () {
            reject(Error('Error fetching data.'));
        };
        request.send();
    });
    // .then(data => {
    //     console.log('request success & data received: ')
    //     console.log(data)
    // })
    // .catch(error => {
    //     console.log(error)
    // })
};
var combinePromise = function () {
    return Promise.all([getPost1(), getPost2()])
        .then(function (data) { return console.log(data); })["catch"](function (error) { return console.log(error); });
};
exports.combinePromise = combinePromise;
var getUserInfo = function () {
    return new Promise(function (resolve, reject) {
        axios_1["default"].get('https://jsonplaceholder.typicode.com/posts')
            .then(function (reponse) {
            resolve(reponse.data);
        })["catch"](function (error) {
            console.error(error);
            reject('Get data fail');
        });
    });
};
exports.getUserInfo = getUserInfo;
