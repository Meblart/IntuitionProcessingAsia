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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var users_service_1 = require("./services/users.service");
var array_helper_1 = require("../../models/array-helper");
var base_component_1 = require("../../models/base.component");
var UsersComponent = (function (_super) {
    __extends(UsersComponent, _super);
    function UsersComponent(usersService, location, router) {
        var _this = _super.call(this, location) || this;
        _this.usersService = usersService;
        _this.location = location;
        _this.router = router;
        return _this;
    }
    Object.defineProperty(UsersComponent.prototype, "users", {
        get: function () {
            return this._users;
        },
        set: function (value) {
            this._users = value;
        },
        enumerable: true,
        configurable: true
    });
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showProgress("Downloading users...");
        this.usersService.getAllUsers().subscribe(function (users) { _this.hideProgress(); _this.users = users; }, function (error) { return _this.error = error; });
    };
    UsersComponent.prototype.editUser = function (selectedUserId) {
        this.router.navigate(['./users/user-details', selectedUserId]);
    };
    UsersComponent.prototype.deleteUser = function (userToDelete) {
        var _this = this;
        this.showProgress("Deleting user...");
        this.usersService.deleteUser(userToDelete.id).subscribe(
        //void observable doesn't emit values - it can only complete of fail
        function () { }, function (error) { return _this.contextError = error; }, function () {
            _this.hideProgress();
            //when user has been removed from backend - reflect that in local list
            array_helper_1.ArrayHelper.removeItem(_this.users, userToDelete);
        });
    };
    UsersComponent.prototype.addUser = function () {
        this.router.navigate(['./users/user-details/new-user']);
    };
    return UsersComponent;
}(base_component_1.BaseComponent));
UsersComponent = __decorate([
    core_1.Component({
        selector: 'users',
        templateUrl: './users.component.html'
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        common_1.Location,
        router_1.Router])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map