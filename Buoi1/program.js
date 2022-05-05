"use strict";
exports.__esModule = true;
var demo_async_1 = require("./demo.async");
// var department2 = new Department(2, 'Sale')
// printDepartment(department1)
// printDepartment(department2)
// var ac = new Account(1, 'Nguyen Van A')
// showAccountInfo(ac)
function welcomeUser(username) {
    console.log('Welcome: ' + username);
}
//login('Nguyen Van A', '123abc')
//welcomeUser('Nguyen Van A')
//login2('Nguyen Van A', '123abc', welcomeUser)
//getPosts()
//console.log(getUserInfo())
//getUserInfo().then(data => console.log(data))
//combinePromises()
//createUserGroup()
//getPostAsync()
//demoAsync()
//createAndAddUserToGroup()
(0, demo_async_1.testAsyncLoop)();
