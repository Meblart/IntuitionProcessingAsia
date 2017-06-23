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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var cases_backend_service_1 = require("../../../services/cases-backend.service");
var CasesService = (function () {
    function CasesService(casesBackendService) {
        this.casesBackendService = casesBackendService;
    }
    CasesService.prototype.getCases = function () {
        return this.casesBackendService.getCases();
    };
    CasesService.prototype.getCase = function (id) {
        return this.casesBackendService.getCase(id);
    };
    CasesService.prototype.saveCase = function (caseObj) {
        this.casesBackendService.saveCase(caseObj);
        return Observable_1.Observable.of();
    };
    CasesService.prototype.addCase = function (caseObj) {
        return this.casesBackendService.addCase(caseObj);
    };
    CasesService.prototype.deleteCase = function (caseObj) {
        this.casesBackendService.deleteCase(caseObj);
        return Observable_1.Observable.empty();
    };
    return CasesService;
}());
CasesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cases_backend_service_1.CasesBackendService])
], CasesService);
exports.CasesService = CasesService;
//# sourceMappingURL=cases.service.js.map