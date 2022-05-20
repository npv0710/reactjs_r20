import { Department, department1, printDepartment } from "./department"
import Account, { showAccountInfo } from "./account"
import { login, login2, getPosts, combinePromises, createUserGroup, getUserInfo } from "./demo.promise"
import { demoAsync, getPostAsync, createAndAddUserToGroup, testAsyncLoop } from "./demo.async"

import Excercise4 from "./Excercise4"

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

createAndAddUserToGroup()

//testAsyncLoop()

function question14(str: string, oldChart: string, newChart: string) {

    let re = new RegExp(`${oldChart}`, 'g');

    let newStr = str.replace(re, newChart);

    console.log(newStr);

}

//question14('123abc', 'abc', '456');
// let ex4 = new Excercise4();

// console.log(ex4.question2('b)')(50, 25));

// function testParams(a: number, b: number) {
//     return a + b + 1000;
// }

// type fn01 = (name: string) => void
// type fn02 = (age: string) => void
// type fn03 = (description: number) => void

// type Options = 'op1' | 'op2' | 'op3'

// const test = (options) => {
//     switch(options) {
//           case 'op1':
//             return 'fn01';
//           case 'op2':
//             return 'fn02';
//           case 'op3':
//             return 'fn03';
//           default:
//             return null;
//         }
//     }

// console.log(test('op1'));