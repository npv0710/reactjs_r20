"use strict";
exports.__esModule = true;
var Excercise4 = /** @class */ (function () {
    function Excercise4() {
    }
    Excercise4.prototype.question2 = function (str) {
        switch (str) {
            case 'c)':
                //let b = a => a + 100;
                return function (a, b, c) { return a + b + c + 1000; };
            case 'a)':
                return function (a) { return a + 100; };
            case 'b)':
                //let b = a => a + 100;
                return function (a, b) { return a + b + 1000; };
        }
        // if (str === 'a') {
        //     return a => a + 100;
        // }else if (str === 'b)'){
        //     return (a, b) => a + b + 1000;
        // }else if (str === 'c)'){
        //     return (a, b, c?) => a + b + c + 1000;
        // }
    };
    return Excercise4;
}());
exports["default"] = Excercise4;
