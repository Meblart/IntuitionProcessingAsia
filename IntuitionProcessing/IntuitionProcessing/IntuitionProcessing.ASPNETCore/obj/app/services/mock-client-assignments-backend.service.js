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
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var client_assignments_backend_service_1 = require("./client-assignments-backend.service");
var client_1 = require("../models/client");
var assignments__ = [
    {
        userId: 1,
        clients: [new client_1.Client("AAM", "AAM long descriptive name", "AAM comment", 1), new client_1.Client("BBVA", "BBVA long even more descriptive name", "BBVA comment", 2)]
    },
];
var MockClientAssignmentsBackendService = (function (_super) {
    __extends(MockClientAssignmentsBackendService, _super);
    function MockClientAssignmentsBackendService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MockClientAssignmentsBackendService.prototype.getClientsAssignedToUser = function (userId) {
        var clients;
        var assignment = assignments__.find(function (value) { return value.userId === userId; });
        if (assignment !== undefined) {
            clients = assignment.clients;
        }
        return rxjs_1.Observable.of(clients);
    };
    MockClientAssignmentsBackendService.prototype.unassignClientFromUser = function (userId, clientId) {
        return rxjs_1.Observable.empty();
    };
    MockClientAssignmentsBackendService.prototype.assignClientToUser = function (userId, clientId) {
        return rxjs_1.Observable.empty();
    };
    return MockClientAssignmentsBackendService;
}(client_assignments_backend_service_1.ClientAssignmentsBackendService));
MockClientAssignmentsBackendService = __decorate([
    core_1.Injectable()
], MockClientAssignmentsBackendService);
exports.MockClientAssignmentsBackendService = MockClientAssignmentsBackendService;
//# sourceMappingURL=mock-client-assignments-backend.service.js.map