"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var user_1 = require("../models/user");
var users_backend_service_1 = require("./users-backend.service");
var users__ = [
    new user_1.User("user name 1", "user1@email.com", "111-111-111", 1),
    new user_1.User("user name 2", "user2@email.com", "222-222-222", 2),
    new user_1.User("user name 3", "user3@email.com", "333-333-333", 3)
];
var MockUsersBackendService = (function (_super) {
    __extends(MockUsersBackendService, _super);
    function MockUsersBackendService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MockUsersBackendService.prototype.getAllUsers = function () {
        return rxjs_1.Observable.of(users__).delay(2000);
    };
    MockUsersBackendService.prototype.getUser = function (id) {
        return rxjs_1.Observable.of(users__.find(function (value, index, obj) { return value.id === id; }));
    };
    MockUsersBackendService.prototype.saveUser = function (userToSave) {
        var foundUser = users__.find(function (value, index, obj) { return value.id === userToSave.id; });
        var foundUserIndex = users__.indexOf(foundUser);
        users__.splice(foundUserIndex, 1, userToSave);
        return rxjs_1.Observable.empty();
    };
    MockUsersBackendService.prototype.addUser = function (userToAdd) {
        var newId = users__.length + 1;
        userToAdd = new user_1.User(userToAdd.name, userToAdd.email, userToAdd.phone, newId);
        //emualte adding user to db
        users__.push(userToAdd);
        return rxjs_1.Observable.of(userToAdd);
    };
    MockUsersBackendService.prototype.deleteUser = function (id) {
        return rxjs_1.Observable.empty();
    };
    return MockUsersBackendService;
}(users_backend_service_1.UsersBackendService));
MockUsersBackendService = __decorate([
    core_1.Injectable()
], MockUsersBackendService);
exports.MockUsersBackendService = MockUsersBackendService;
//# sourceMappingURL=mock-users-backend.service.js.map