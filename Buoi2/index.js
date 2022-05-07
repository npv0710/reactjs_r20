"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var title = 'Reactjs buoi1';
var totalStudent = 12;
console.log(title);
console.log('R20 have ' + totalStudent + ' student');
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
var fullName = getFullName('Adams', 'Smith');
console.log(fullName);
function getFullName2(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Smith'; }
    return firstName + ' ' + lastName;
}
console.log(getFullName2('Wayne'));
console.log(getFullName2('Wayne', 'Smith'));
console.log(getFullName2('Wayne', 'Smith2'));
function getFullName3(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restOfName.join(' ');
}
console.log(getFullName3('Nguyen', 'Thi', 'Thu', 'Thuy'));
console.log(getFullName3('Nguyen', 'Điện'));
console.log(getFullName3('Nguyen'));
function sum(a, b) {
    return a + b;
}
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        return this.name + 'move ' + meters + 'm/s';
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.move = function (meters) {
        if (meters === void 0) { meters = 5; }
        return _super.prototype.move.call(this, meters);
    };
    return Cat;
}(Animal));
var cat = new Cat('Tom');
console.log(cat.move());
console.log(cat.move(15));
