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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var user_1 = require("../../models/user");
var base_component_1 = require("../../models/base.component");
var users_service_1 = require("./services/users.service");
var AssignClientComponent = (function (_super) {
    __extends(AssignClientComponent, _super);
    function AssignClientComponent(usersService, location) {
        var _this = _super.call(this, location) || this;
        _this.usersService = usersService;
        _this.location = location;
        _this.assignmentsDone = new core_1.EventEmitter();
        _this.clientLookup = new forms_1.FormControl();
        return _this;
    }
    Object.defineProperty(AssignClientComponent.prototype, "foundClients", {
        get: function () {
            return this._foundClients;
        },
        set: function (value) {
            this._foundClients = value;
        },
        enumerable: true,
        configurable: true
    });
    AssignClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.foundClients = this.clientLookup.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .filter(function (value) { return value.length >= 2; })
            .switchMap(function (value) { return _this.usersService.getClientsByPattern(value); });
    };
    AssignClientComponent.prototype.assignClient = function (clientToAssign) {
        var _this = this;
        this.showProgress("Assigning client...");
        this.usersService.assignClient(this.currentUser, clientToAssign, this.assignedClients).subscribe(function () { }, function (error) { return _this.contextError = error; }, 
        //add client to local assigned clients if client was assigned in service
        function () { _this.hideProgress(); _this.assignedClients.push(clientToAssign); });
    };
    AssignClientComponent.prototype.closeClientsAssignments = function () {
        this.assignmentsDone.emit(null);
    };
    return AssignClientComponent;
}(base_component_1.BaseComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], AssignClientComponent.prototype, "currentUser", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AssignClientComponent.prototype, "assignedClients", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AssignClientComponent.prototype, "assignmentsDone", void 0);
AssignClientComponent = __decorate([
    core_1.Component({
        selector: "assign-client",
        templateUrl: "./assign-client.component.html"
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        common_1.Location])
], AssignClientComponent);
exports.AssignClientComponent = AssignClientComponent;
//# sourceMappingURL=assign-client.component.js.map