import { Department, department1, printDepartment } from "./department"
import Account, { showAccountInfo } from "./account"
import { login, login2, getPosts, combinePromises, createUserGroup, getUserInfo } from "./demo.promise"
import { demoAsync, getPostAsync, createAndAddUserToGroup, testAsyncLoop } from "./demo.async"

// var department2 = new Department(2, 'Sale')

// printDepartment(department1)

// printDepartment(department2)

// var ac = new Account(1, 'Nguyen Van A')

// showAccountInfo(ac)

function welcomeUser(username: string) {
    console.log('Welcome: ' + username)
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

testAsyncLoop()