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

showName()

var showName2 = user.showInfo.bind(user)

showName2()

