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
var cases_service_1 = require("../services/cases.service");
var array_helper_1 = require("../../../models/array-helper");
var base_component_1 = require("../../../models/base.component");
var CasesComponent = (function (_super) {
    __extends(CasesComponent, _super);
    function CasesComponent(casesService, location, router) {
        var _this = _super.call(this, location) || this;
        _this.casesService = casesService;
        _this.location = location;
        _this.router = router;
        return _this;
    }
    Object.defineProperty(CasesComponent.prototype, "cases", {
        get: function () {
            return this._cases;
        },
        set: function (value) {
            this._cases = value;
        },
        enumerable: true,
        configurable: true
    });
    CasesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showProgress("Please wait, loading cases in progress...");
        this.casesService.getCases().subscribe(function (cases) {
            _this.hideProgress();
            _this.cases = cases;
        }),
            function (error) { _this.error = error; };
    };
    CasesComponent.prototype.goBack = function () {
        this.location.back();
    };
    CasesComponent.prototype.addCase = function () {
        this.router.navigate(['./cases/case-new',]);
    };
    CasesComponent.prototype.editCase = function (caseId) {
        this.router.navigate(['./cases/case-edit', caseId]);
    };
    CasesComponent.prototype.getCase = function (caseId) {
        this.router.navigate(['./cases/case-details', caseId]);
    };
    CasesComponent.prototype.deleteCase = function (caseObj) {
        var _this = this;
        this.showProgress("Deleting case, please wait...");
        try {
            this.casesService.deleteCase(caseObj).subscribe(function () { }, function (error) { return _this.contextError = error; }, function () {
                _this.hideProgress();
                array_helper_1.ArrayHelper.removeItem(_this.cases, caseObj);
            });
        }
        catch (e) {
            this.contextError = e;
        }
    };
    return CasesComponent;
}(base_component_1.BaseComponent));
CasesComponent = __decorate([
    core_1.Component({
        //selector: 'hero-form',
        templateUrl: './cases.component.html',
    }),
    __metadata("design:paramtypes", [cases_service_1.CasesService,
        common_1.Location,
        router_1.Router])
], CasesComponent);
exports.CasesComponent = CasesComponent;
//# sourceMappingURL=cases.component.js.map