"use strict";

var username = 'Tran Van B'
console.log(username)

var ob = {
    name: 'Nguyen Hai Dang',
    showName: function() {
        //let self = this
        function print() {
            console.log('name: ' + this.name)
        }
        //print.bind(this)()
        //print.call(this)
        //print.apply(this)
    },

    showName2: function() {
        let print = () => {
            console.log('name: ' + this.name)
        }
        print()
    }
}

ob.showName2()

var user = {
    username: 'Nguyen Van A',
    showInfo: function() {
        console.log('Name: ' + this.username)
        //console.log(this)
    }
}

var showName = user.showInfo

//showName()

var showName2 = user.showInfo.bind(user)

//showName2()

/*----------- Con tro this ------------*/
//callback fucntion
var user = {
   firstName : 'Nguyen Hai',
   lastName :'Dang',

   showInfoDetail: function () {
            let age = 20
            console.log('Full name: ' + this.firstName + ' ' + this.lastName)
            console.log('Age: ' + age)
    }
    
}

function getInfo(callback) {
    console.log('welcome')
    callback()
}

//getInfo(user.showInfoDetail.bind(user))
//----------

//gán function cho biến
var t = user.showInfoDetail.bind(user)
t()
//----------

//Closure function
var person = {
    firstName: 'Khoa',
    lastName: 'Nguyen',
    friends : ['Van', 'Hang', 'Hien', 'Vinh'],
    showFriend: function() {
      for(var i = 0; i < this.friends.length; i++) 
        console.log(this.firstName + ' have a friend named ' + this.friends[i]);
    },
    showFriendThis: function() {
      this.friends.forEach(function(fr){
        //console.log(this.firstName + ' have a friend named ' + fr);
      });
    },
    showFriendFixed: function() {
        let self = this
        this.friends.forEach(function(fr){
          console.log(self.firstName + ' have a friend named ' + fr);
        });
      }
  };
  
  person.showFriend(); //Hàm chạy đúng
  
  person.showFriendThis(); // Hàm chạy sai

  person.showFriendFixed()

//borrowing function
var student = {
    scores: [5, 10, 15, 20],
    avg: function() {
        let sum = this.scores.reduce((total, currentValue) => total + currentValue)
        return sum / this.scores.length
    }
}

var employee = {
    scores: [10, 20, 30, 40],
    avg: null
}

employee.avg = student.avg()
console.log(employee.avg)

console.log(student.avg())

//console.log(student.avg.apply(employee, employee.scores))

//Call function

function initUser(name, age) {
    this.name = name
    this.age = age
    return {
        name: this.name,
        age: this.age
    }
}

function createUser1(name, age) {
    initUser.call(this, name, age)
    this.role = 'admin'
}

var user1 = new createUser1('Nguyen Van A', 25)

;(function(name) {
    console.log('Hello: ' + name)
}).call(this, 'Nguyen Tien Linh')

function showUserInfo(position) {
    let info = 'Ten: '  + this.name + '; Tuoi: ' + this.age + '; Vi tri: ' + position
    console.log(info)
}

var user2 = {
    name: 'Nguyen Cong Phuong',
    age: 27
}
showUserInfo.call(user1)

showUserInfo.call(user2, 'Dev')

function updateUserPosition(position) {
    this.position = position
    return this
}

var user2Update = updateUserPosition.call(user2, 'Director')

console.log(user2Update)

var question2 = function (str) {
    switch (str) {
        case 'c)':
            //let b = a => a + 100;
            return function (a, b, c) { return a + b + c + 1000; };
        case 'a)':
            return function (a) { return a + 1000; };
        case 'b)':
            //let b = a => a + 100;
            return function (a, b) { return a + b + 1000; };
    }
};


console.log(question2('a)')(20));
console.log(question2('b)')(20, 30));

