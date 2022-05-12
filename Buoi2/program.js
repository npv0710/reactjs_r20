"use strict";
exports.__esModule = true;
var account_1 = require("./account");
var promise_1 = require("./promise");
var ac = new account_1["default"](1, 'Nguyen Hai Dang');
//showAccountInfo(ac)
function welcome(username) {
    console.log('welcome: ' + username);
}
//login('Nguyen Van A', '123abc', welcome)
//getPost()
//console.log(getUserInfo())
//getUserInfo().then(data => console.log(data))
//combinePromise()
//testPromiseAllSettled()
(0, promise_1.testPromiseAll)();
