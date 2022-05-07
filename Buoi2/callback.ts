function login(username: string, password: string, callback) {
    setTimeout(() => {
        if (username === 'Nguyen Van A' && password === '123abc') {
            console.log('Login successfully')
        }
        callback(username)
    }, 2000)
    //callback(username)
    console.log('Please login first')
}

export {
    login
}