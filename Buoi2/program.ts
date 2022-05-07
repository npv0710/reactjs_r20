export {}

import Account, { showAccountInfo } from "./account";

import { login } from "./callback";

import { combinePromise, getPost, getUserInfo } from "./promise";

var ac = new Account(1, 'Nguyen Hai Dang')

//showAccountInfo(ac)
function welcome(username: string) {
    console.log('welcome: ' + username)
}

//login('Nguyen Van A', '123abc', welcome)

//getPost()

//console.log(getUserInfo())

//getUserInfo().then(data => console.log(data))

combinePromise()