"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var users_backend_service_1 = require("../../../services/users-backend.service");
var client_assignments_backend_service_1 = require("../../../services/client-assignments-backend.service");
var backend_service_1 = require("../../../services/backend.service");
var UsersService = (function () {
    function UsersService(usersBackendService, clientAssignmentsbackendService, backendService) {
        this.usersBackendService = usersBackendService;
        this.clientAssignmentsbackendService = clientAssignmentsbackendService;
        this.backendService = backendService;
    }
    UsersService.prototype.getAllUsers = function () {
        return this.usersBackendService.getAllUsers();
    };
    UsersService.prototype.getUser = function (id) {
        if (id === undefined || id < 0) {
            return rxjs_1.Observable.throw("User id must be provided to get a user");
        }
        else {
            return this.usersBackendService.getUser(id);
        }
    };
    UsersService.prototype.getUserWithAssignedClients = function (id) {
        var _this = this;
        if (id === undefined || id < 0) {
            return rxjs_1.Observable.throw("User id must be provided to get assigned clients");
        }
        else {
            var foundUser_1;
            //get user first
            return this.usersBackendService.getUser(id)
                .switchMap(function (user) {
                foundUser_1 = user;
                //once user was emitted query for assigned clients
                return _this.clientAssignmentsbackendService.getClientsAssignedToUser(id);
            })
                .map(function (userClients) {
                var ret;
                //map returned clients to parent user emitted be source query
                ret = [foundUser_1, userClients];
                return ret;
            });
        }
    };
    UsersService.prototype.saveUser = function (user) {
        if (user == null) {
            return rxjs_1.Observable.throw("User must be provided");
        }
        else {
            return this.usersBackendService.saveUser(user);
        }
    };
    UsersService.prototype.addUser = function (user) {
        if (user == null) {
            return rxjs_1.Observable.throw("User must be provided");
        }
        else {
            return this.usersBackendService.addUser(user);
        }
    };
    UsersService.prototype.deleteUser = function (id) {
        if (id === undefined || id < 0) {
            return rxjs_1.Observable.throw("User id must be provided to delete user");
        }
        else {
            return this.usersBackendService.deleteUser(id);
        }
    };
    UsersService.prototype.getClientsByPattern = function (pattern) {
        if (pattern === undefined || pattern === "") {
            return rxjs_1.Observable.throw("Client pattern must be provided");
        }
        else {
            return this.backendService.getClientsByPattern(pattern);
        }
    };
    UsersService.prototype.assignClient = function (user, client, assignedClients) {
        if (user == null || client == null) {
            return rxjs_1.Observable.throw("User and Client must be provided to create an assignment");
        }
        else if (assignedClients != null && assignedClients.some(function (value) { return value.id === client.id; })) {
            return rxjs_1.Observable.throw("Client " + client.code + " is already assigned");
        }
        else {
            return this.clientAssignmentsbackendService.assignClientToUser(user.id, client.id);
        }
    };
    UsersService.prototype.unassignUser = function (user, client) {
        if (user == null || client == null) {
            return rxjs_1.Observable.throw("User and Client must be provided to unassign client");
        }
        else {
            return this.clientAssignmentsbackendService.unassignClientFromUser(user.id, client.id);
        }
    };
    return UsersService;
}());
UsersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [users_backend_service_1.UsersBackendService,
        client_assignments_backend_service_1.ClientAssignmentsBackendService,
        backend_service_1.BackendService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map