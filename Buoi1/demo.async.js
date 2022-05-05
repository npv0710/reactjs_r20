"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.testAsyncLoop = exports.createAndAddUserToGroup = exports.getPostAsync = exports.demoAsync = void 0;
//import { Request, Response, NextFunction, response } from 'express'
var axios_1 = require("axios");
// interface User {
//     id: number,
//     first_name: string,
//     last_name: string
// }
var demoAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Demo async funcion');
                return [4 /*yield*/, new Promise(function (resolve, reject) { return setTimeout(function () {
                        console.log('processing...');
                        resolve('finished');
                    }, 3000); })];
            case 1:
                result = _a.sent();
                console.log(result);
                return [2 /*return*/];
        }
    });
}); };
exports.demoAsync = demoAsync;
var getPostAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result, users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1["default"].get('https://reqres.in/api/users')];
            case 1:
                result = _a.sent();
                users = result.data.data;
                console.log(showUsers(users));
                return [2 /*return*/];
        }
    });
}); };
exports.getPostAsync = getPostAsync;
function showUsers(users) {
    return users.map(function (_a) {
        var id = _a.id, first_name = _a.first_name, last_name = _a.last_name;
        return ({ id: id, full_name: first_name + ' ' + last_name });
    });
}
function callAPICreateUser() {
    console.log('Call API create user');
    return new Promise(function (resolve, reject) { return setTimeout(function () {
        resolve('Create user successfully');
    }, 1000); });
}
function callAPICreateGroup() {
    console.log('Call API crate group');
    return new Promise(function (resolve, reject) { return setTimeout(function () {
        resolve('Create group successfully');
    }, 2000); });
}
function callAPIAddUserToGroup() {
    console.log('Call API add user to group');
    return new Promise(function (resolve, reject) { return setTimeout(function () {
        resolve('Add user to group successfully');
    }, 3000); });
}
function createAndAddUserToGroup() {
    return __awaiter(this, void 0, void 0, function () {
        var resultCreateUser, resultCreateGroup, resultAddUserToGroup;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, callAPICreateUser()];
                case 1:
                    resultCreateUser = _a.sent();
                    console.log(resultCreateUser);
                    return [4 /*yield*/, callAPICreateGroup()];
                case 2:
                    resultCreateGroup = _a.sent();
                    console.log(resultCreateGroup);
                    return [4 /*yield*/, callAPIAddUserToGroup()];
                case 3:
                    resultAddUserToGroup = _a.sent();
                    console.log(resultAddUserToGroup);
                    return [2 /*return*/];
            }
        });
    });
}
exports.createAndAddUserToGroup = createAndAddUserToGroup;
var sleep = function (ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
function printCounter(i) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('current value: ' + i);
            resolve(i);
        }, (5 - i) * 1000);
    });
    //return sleep(1000 * (5-i)).then(v => console.log('current value: ' + i))
}
function testAsyncLoop() {
    return __awaiter(this, void 0, void 0, function () {
        var i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 1;
                    _a.label = 1;
                case 1:
                    if (!(i < 4)) return [3 /*break*/, 4];
                    console.log('i: ' + i);
                    return [4 /*yield*/, printCounter(i)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.testAsyncLoop = testAsyncLoop;
