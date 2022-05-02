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
var title = "Reactjs buoi1";
console.log(title);
console.log('123abc');
var title = 'Demo typescript';
var x = 30;
//x= 30
console.log(x);
function sum(a, b) {
    var total = a + b;
    return total;
}
console.log(sum(3, 5));
var getFullName = function (firstName, lastName) {
    return firstName + ' ' + lastName;
};
console.log(getFullName('Wayney', 'Rooney'));
var getFullName2 = function (firstName, lastName) {
    if (lastName === void 0) { lastName = 'Smith'; }
    return firstName + ' ' + lastName;
};
console.log(getFullName('Adams', 'Smith'));
var getFullName3 = function (firstName, lastName) {
    if (lastName)
        return firstName + ' ' + lastName;
    else
        return firstName;
};
function getFullName4(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restOfName.join(' ');
}
var fullName = getFullName4('Nguyen', 'Thi', 'Thu', 'Thuy');
var fullName2 = getFullName4('Tran');
console.log(fullName);
console.log(fullName2);
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        return this.name + ' moved ' + meters + 'm';
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
