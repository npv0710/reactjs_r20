var username = 'Tran Van B'
console.log(username)

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
t = user.showInfoDetail.bind(user)
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
        console.log(this.firstName + ' have a friend named ' + fr);
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
