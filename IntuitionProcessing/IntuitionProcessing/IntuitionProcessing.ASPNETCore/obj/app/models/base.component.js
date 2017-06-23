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
var BaseComponent = (function () {
    function BaseComponent(baseLocation) {
        this.baseLocation = baseLocation;
        this.isProgressShowed = false;
    }
    Object.defineProperty(BaseComponent.prototype, "error", {
        get: function () {
            return this._error;
        },
        set: function (value) {
            //hide progress dialog before setting error
            this.hideProgress();
            this._error = value;
            //TODO - only for development
            alert("Error " + this.contextError);
            this.isError = value !== undefined && value !== null && value != "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "contextError", {
        get: function () {
            return this._contextError;
        },
        set: function (value) {
            //hide progress dialog before setting context error
            this.hideProgress();
            this._contextError = value;
            //TODO - only for development
            alert("Context error " + this.contextError);
            this.isContextError = value !== undefined && value !== null && value != "";
        },
        enumerable: true,
        configurable: true
    });
    //go back in current route if no progress is showed currently
    BaseComponent.prototype.goBack = function () {
        if (!this.isProgressShowed) {
            this.baseLocation.back();
        }
    };
    Object.defineProperty(BaseComponent.prototype, "progressMessage", {
        get: function () {
            return this._progressMessage;
        },
        set: function (value) {
            this._progressMessage = value;
        },
        enumerable: true,
        configurable: true
    });
    //show progress with message for current component
    BaseComponent.prototype.showProgress = function (message) {
        this.isProgressShowed = true;
        this.progressMessage = message;
        //TODO - angular like progress dialog
    };
    //hide progres indicator for current component
    BaseComponent.prototype.hideProgress = function () {
        if (this.isProgressShowed) {
            //TODO - angular like hide progress dialog
            this.isProgressShowed = false;
        }
    };
    //hide progres indicator for current component and go back in current route
    BaseComponent.prototype.hideProgressAndGoBack = function () {
        this.hideProgress();
        this.goBack();
    };
    return BaseComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], BaseComponent.prototype, "error", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], BaseComponent.prototype, "progressMessage", null);
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base.component.js.map