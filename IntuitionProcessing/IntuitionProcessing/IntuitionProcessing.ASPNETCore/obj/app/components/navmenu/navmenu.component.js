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
var current_data_service_1 = require("../../services/current-data.service");
var backend_service_1 = require("../../services/backend.service");
var setup_1 = require("../../models/setup");
var NavMenuComponent = (function () {
    function NavMenuComponent(currentDataService, backendService) {
        this.currentDataService = currentDataService;
        this.backendService = backendService;
    }
    NavMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backendService.getSetup().then(function (setup) { return _this.currentDataService.setup = setup; }).catch(function (error) { return _this.currentDataService.setup = new setup_1.Setup(new Array()); });
    };
    return NavMenuComponent;
}());
NavMenuComponent = __decorate([
    core_1.Component({
        selector: 'nav-menu',
        templateUrl: './navmenu.component.html',
    }),
    __metadata("design:paramtypes", [current_data_service_1.CurrentDataService,
        backend_service_1.BackendService])
], NavMenuComponent);
exports.NavMenuComponent = NavMenuComponent;
//# sourceMappingURL=navmenu.component.js.map