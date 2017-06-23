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
var common_1 = require("@angular/common");
var base_component_1 = require("../../models/base.component");
var core_1 = require("@angular/core");
var ProgressComponent = (function (_super) {
    __extends(ProgressComponent, _super);
    function ProgressComponent(location) {
        var _this = _super.call(this, location) || this;
        _this.location = location;
        return _this;
    }
    return ProgressComponent;
}(base_component_1.BaseComponent));
ProgressComponent = __decorate([
    core_1.Component({
        selector: "progress-marbles",
        templateUrl: "./progress.component.html"
    }),
    __metadata("design:paramtypes", [common_1.Location])
], ProgressComponent);
exports.ProgressComponent = ProgressComponent;
//# sourceMappingURL=progress.component.js.map