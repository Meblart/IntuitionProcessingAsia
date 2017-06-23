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
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var cases_backend_service_1 = require("./cases-backend.service");
var cases = [
    { caseId: 1, site: "1 www.bombeltestuje.intuition.com", description: "This is description", creationDate: "11/12/12" },
    { caseId: 2, site: "2 www.bombeltestuje.intuition.com", description: "This is description", creationDate: "12/12/12" },
    { caseId: 3, site: "3 www.bombeltestuje.intuition.com", description: "This is description", creationDate: "13/12/12" },
    { caseId: 4, site: "4 www.bombeltestuje.intuition.com", description: "This is description", creationDate: "14/12/12" },
    { caseId: 5, site: "5 www.bombeltestuje.intuition.com", description: "This is description", creationDate: "15/12/12" },
    { caseId: 6, site: "6 www.bombeltestuje.intuition.com", description: "This is description", creationDate: "16/12/12" }
];
var MockCasesBackendService = (function (_super) {
    __extends(MockCasesBackendService, _super);
    function MockCasesBackendService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MockCasesBackendService.prototype.getCases = function () {
        return rxjs_1.Observable.of(cases);
    };
    MockCasesBackendService.prototype.getCase = function (id) {
        return rxjs_1.Observable.of(cases.find(function (obj) { return obj.caseId == id; }));
    };
    MockCasesBackendService.prototype.saveCase = function (caseToBeSaved) {
        var caseFromDb = cases.find(function (value, index, obj) { return value.caseId === caseToBeSaved.caseId; });
        var caseFromDbIndex = cases.indexOf(caseFromDb);
        cases.splice(caseFromDbIndex, 1, caseToBeSaved);
        return rxjs_1.Observable.empty();
    };
    MockCasesBackendService.prototype.addCase = function (newCase) {
        cases.push(newCase);
        return rxjs_1.Observable.of(newCase);
    };
    MockCasesBackendService.prototype.deleteCase = function (caseObj) {
        return rxjs_1.Observable.empty();
    };
    return MockCasesBackendService;
}(cases_backend_service_1.CasesBackendService));
MockCasesBackendService = __decorate([
    core_1.Injectable()
], MockCasesBackendService);
exports.MockCasesBackendService = MockCasesBackendService;
//# sourceMappingURL=mock-cases-backend.service.js.map