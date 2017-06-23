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
var case_1 = require("../../../models/case");
var cases_service_1 = require("../services/cases.service");
var base_component_1 = require("../../../models/base.component");
var CaseDetailsComponent = (function (_super) {
    __extends(CaseDetailsComponent, _super);
    function CaseDetailsComponent(casesService, activatedRoute, location, router) {
        var _this = _super.call(this, location) || this;
        _this.casesService = casesService;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.router = router;
        return _this;
    }
    CaseDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.switchMap(function (params) {
            var tmpCase;
            try {
                return _this.casesService.getCase(params['id']);
            }
            catch (e) {
                _this.error = e;
            }
        }).subscribe(function (caseObj) { return (caseObj != null) ? _this.case = caseObj : _this.case = new case_1.Case(null, "", "", ""); }, function (errorObj) { return _this.error = errorObj; });
        if (this.location.isCurrentPathEqualTo("/cases/case-new")) {
            this.pageTitle = "New Case";
            this.pageSubBut = "Submit";
            this.isEditable = true;
        }
        else if (this.location.isCurrentPathEqualTo("/cases/case-edit/" + this.case.caseId)) {
            this.pageTitle = "Case details";
            this.pageSubBut = "Update";
            this.isEditable = true;
        }
        else {
            this.pageTitle = "Case details";
            this.pageSubBut = "Update";
            this.isEditable = false;
        }
    };
    CaseDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    CaseDetailsComponent.prototype.onSubmit = function (caseObj) {
        var _this = this;
        this.showProgress("Working on updates, please wait..");
        try {
            this.casesService.saveCase(caseObj).subscribe(function (caseObj) { return _this.hideProgressAndGoBack(); }, function (error) { return _this.contextError = error; });
        }
        catch (e) {
            this.contextError = e;
        }
        this.goBack();
    };
    CaseDetailsComponent.prototype.enableEditing = function () {
        this.isEditable = true;
    };
    return CaseDetailsComponent;
}(base_component_1.BaseComponent));
CaseDetailsComponent = __decorate([
    core_1.Component({
        templateUrl: './case-details.component.html',
    }),
    __metadata("design:paramtypes", [cases_service_1.CasesService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_1.Router])
], CaseDetailsComponent);
exports.CaseDetailsComponent = CaseDetailsComponent;
//# sourceMappingURL=case-details.component.js.map