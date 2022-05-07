export {}
var title: string = 'Reactjs buoi1'
var totalStudent: number = 12
console.log(title)
console.log('R20 have ' + totalStudent + ' student')

function getFullName (firstName: string, lastName: string) {
    return firstName + ' ' + lastName
}

var fullName = getFullName('Adams', 'Smith')
console.log(fullName)

function getFullName2 (firstName: string, lastName: string = 'Smith') {
    return firstName + ' ' + lastName
}

console.log(getFullName2('Wayne'))

console.log(getFullName2('Wayne', 'Smith'))

console.log(getFullName2('Wayne', 'Smith2'))

function getFullName3 (firstName: string, ...restOfName: string[]) {
    return firstName + ' ' + restOfName.join(' ')
}

console.log(getFullName3('Nguyen', 'Thi', 'Thu', 'Thuy'))
console.log(getFullName3('Nguyen', 'Điện'))
console.log(getFullName3('Nguyen'))

function sum(a: number, b: number): number {
    return a + b;
}

class Animal {
    private name: string
    constructor(name: string) {
        this.name = name
    }

    move(meters: number = 0): string {
        return this.name + 'move ' + meters + 'm/s'
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name)
    }

    move(meters = 5): string {
        return super.move(meters)
    }
}

var cat = new Cat('Tom')

console.log(cat.move())
console.log(cat.move(15))

