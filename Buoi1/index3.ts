//export {}
var title: string = "Reactjs buoi1";
console.log(title);
console.log('123abc');

var title: string = 'Demo typescript';

var x: number = 30;
//x= 30

console.log(x)

function sum(a: number, b: number): number {
    let total = a + b
    return total
}

console.log(sum(3, 5))

var getFullName = (firstName: string, lastName: string) => {
    return firstName + ' ' + lastName
}

console.log(getFullName('Wayney', 'Rooney'))

var getFullName2 = (firstName: string, lastName: string = 'Smith') => {
    return firstName + ' ' + lastName
}

console.log(getFullName('Adams', 'Smith'))

var getFullName3 = (firstName: string, lastName?: string) => {
    if (lastName)
        return firstName + ' ' + lastName
    else 
        return firstName
}

function getFullName4(firstName: string, ...restOfName: string[]) {
    return firstName + ' ' + restOfName.join(' ')
}

var fullName = getFullName4('Nguyen', 'Thi', 'Thu', 'Thuy')
var fullName2 = getFullName4('Tran')
console.log(fullName)
console.log(fullName2)

// class Animal {
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }

//     move(meters: number = 0): string {
//         return this.name + ' moved ' + meters + 'm'
//     }
// }

// class Cat extends Animal {
//     constructor(name: string) {
//         super(name)
//     }
//     move(meters = 5): string {
//         return super.move(meters)
//     }
// }

// var cat = new Cat('Tom')
// console.log(cat.move())
// console.log(cat.move(15))






