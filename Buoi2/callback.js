"use strict";
exports.__esModule = true;
exports.login = void 0;
function login(username, password, callback) {
    setTimeout(function () {
        if (username === 'Nguyen Van A' && password === '123abc') {
            console.log('Login successfully');
        }
        callback(username);
    }, 2000);
    //callback(username)
    console.log('Please login first');
}
exports.login = login;
