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
var rxjs_1 = require("rxjs");
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var users_service_1 = require("./services/users.service");
var base_component_1 = require("../../models/base.component");
var user_1 = require("../../models/user");
var array_helper_1 = require("../../models/array-helper");
var UserDetailsComponent = (function (_super) {
    __extends(UserDetailsComponent, _super);
    function UserDetailsComponent(usersService, route, location) {
        var _this = _super.call(this, location) || this;
        _this.usersService = usersService;
        _this.route = route;
        _this.location = location;
        _this.isNewUser = false;
        _this.isClientLookup = false;
        return _this;
    }
    Object.defineProperty(UserDetailsComponent.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDetailsComponent.prototype, "assignedClients", {
        get: function () {
            return this._assignedClients;
        },
        set: function (value) {
            this._assignedClients = value;
        },
        enumerable: true,
        configurable: true
    });
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            var ret;
            var userId = params['id'];
            //if this is new user, initialize empty user
            if (userId === undefined || userId == "new-user" || userId == "" || +userId < 0) {
                var newUserWithClients = [new user_1.User("", "", ""), new Array()];
                ret = rxjs_1.Observable.of(newUserWithClients);
                _this.isNewUser = true;
            }
            else {
                _this.showProgress("Downloading user...");
                ret = _this.usersService.getUserWithAssignedClients(+userId);
                _this.isNewUser = false;
            }
            return ret;
        }).subscribe(function (userWithAssignedClients) {
            _this.hideProgress();
            _this.user = userWithAssignedClients[0];
            _this.assignedClients = userWithAssignedClients[1];
        }, function (error) { return _this.error = error; });
    };
    UserDetailsComponent.prototype.saveUser = function () {
        var _this = this;
        this.showProgress("Saving user...");
        if (this.isNewUser) {
            this.usersService.addUser(this.user).subscribe(function (addedUser) { return _this.hideProgressAndGoBack(); }, function (error) { return _this.contextError = error; });
        }
        else {
            this.usersService.saveUser(this.user).subscribe(
            //void observable doesn't emit values - it can only complete of fail
            function () { }, function (error) { return _this.contextError = error; }, function () { return _this.hideProgressAndGoBack(); });
        }
    };
    UserDetailsComponent.prototype.openLookupClients = function () {
        this.isClientLookup = true;
    };
    UserDetailsComponent.prototype.closeLookupClients = function () {
        this.isClientLookup = false;
    };
    UserDetailsComponent.prototype.unassignClient = function (clientToUnassign) {
        var _this = this;
        this.showProgress("Unassigning client...");
        this.usersService.unassignUser(this.user, clientToUnassign).subscribe(
        //void observable doesn't emit values - it can only complete of fail
        function () { }, function (error) { return _this.contextError = error; }, 
        //remove client from local assigned clients if client was unassigned in service
        function () { _this.hideProgress(); array_helper_1.ArrayHelper.removeItem(_this.assignedClients, clientToUnassign); });
    };
    return UserDetailsComponent;
}(base_component_1.BaseComponent));
UserDetailsComponent = __decorate([
    core_1.Component({
        selector: 'user-details',
        templateUrl: './user-details.component.html'
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        router_1.ActivatedRoute,
        common_1.Location])
], UserDetailsComponent);
exports.UserDetailsComponent = UserDetailsComponent;
//# sourceMappingURL=user-details.component.js.map