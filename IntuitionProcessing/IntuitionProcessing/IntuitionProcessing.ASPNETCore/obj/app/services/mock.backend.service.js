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
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var client_1 = require("../models/client");
var site_1 = require("../models/site");
var setup_1 = require("../models/setup");
var product_1 = require("../models/product");
var backend_service_1 = require("./backend.service");
var case_1 = require("../models/case");
var clients__ = [
    new client_1.Client("AAM", "AAM long descriptive name", "AAM comment", 1),
    new client_1.Client("BBVA", "BBVA long even more descriptive name", "BBVA comment", 2)
];
var cases = [
    new case_1.Case(1, "www.bombeltestuje.intuition.com", "This is description", "12/12/12"),
    new case_1.Case(2, "www.alefajnie.intuition.com", "This is description", "03/12/17"),
    new case_1.Case(3, "www.symphonysolutions.intuition.com", "This is description", "21/02/12"),
    new case_1.Case(4, "www.test.intuition.com", "This is description", "28/12/11"),
    new case_1.Case(5, "www.tomektest.intuition.com", "This is description", "12/08/10"),
    new case_1.Case(6, "www.testtesttest.intuition.com", "This is description", "12/08/10"),
    new case_1.Case(7, "www.tttttteeeest.intuition.com", "This is description", "12/08/10"),
    new case_1.Case(8, "www.tak.intuition.com", "This is description", "01/03/17")
];
clients__[0].sites.push(new site_1.Site("AICC", "aam site 1 comment", "https://aamcontent.intuition.com", 1));
clients__[0].sites.push(new site_1.Site("Hosted", "aam site 2 comment", "https://aamrubicon.intuition.com", 2));
var allProducts__ = [
    new product_1.Product("KnowHow", "KnowHow comment", "43", 1),
    new product_1.Product("KnowHow", "KnowHow comment", "42", 2),
    new product_1.Product("KnowHow", "KnowHow comment", "41", 3),
    new product_1.Product("KnowHow", "KnowHow comment", "40", 4),
    new product_1.Product("NASBA", "NASBA comment", "2016", 5)
];
var MockBackendService = (function (_super) {
    __extends(MockBackendService, _super);
    function MockBackendService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MockBackendService.prototype.getClients = function (clientIds) {
        return Promise.resolve(clients__);
    };
    MockBackendService.prototype.getClientsByPattern = function (clientPattern) {
        var patternUppercase = clientPattern.toUpperCase();
        return rxjs_1.Observable.of(clients__.filter(function (value) { return value.code.toUpperCase().includes(patternUppercase) || value.name.toUpperCase().includes(clientPattern); }));
    };
    MockBackendService.prototype.getClient = function (clientId) {
        return new Promise(function (resolve) {
            return setTimeout(function () {
                return resolve(clients__.find(function (value, index, obj) { return value.id == clientId; }));
            }, 2000);
        });
    };
    MockBackendService.prototype.getUserClients = function (userId) {
        return rxjs_1.Observable.of([clients__[0]]);
    };
    MockBackendService.prototype.saveClient = function (clientToSave) {
        return new Promise(function (resolve) {
            var existingClient = clients__.find(function (value, index, obj) { return value.id == clientToSave.id; });
            var existingClientIndex = clients__.indexOf(existingClient);
            clients__.splice(existingClientIndex, 1, clientToSave);
            resolve("");
        });
    };
    MockBackendService.prototype.addClient = function (clientToAdd) {
        return new Promise(function (resolve) {
            var mockNewClient = new client_1.Client(clientToAdd.code, clientToAdd.name, clientToAdd.comment, clients__.length + 1);
            clients__.push(mockNewClient);
            resolve(clients__.length);
        });
    };
    MockBackendService.prototype.getSetup = function () {
        return Promise.resolve(new setup_1.Setup(allProducts__));
    };
    MockBackendService.prototype.addSite = function (clientId, siteToAdd) {
        var existingClient = clients__.find(function (value, index, obj) { return value.id == clientId; });
        existingClient.sites.push(new site_1.Site(siteToAdd.integrationType, siteToAdd.comment, siteToAdd.url, existingClient.sites.length + 1));
        return Promise.resolve(existingClient.sites.length);
    };
    MockBackendService.prototype.saveSite = function (siteToAdd) {
        return Promise.resolve();
    };
    MockBackendService.prototype.getCases = function (clientIds) {
        return Promise.resolve(cases);
    };
    return MockBackendService;
}(backend_service_1.BackendService));
MockBackendService = __decorate([
    core_1.Injectable()
], MockBackendService);
exports.MockBackendService = MockBackendService;
//# sourceMappingURL=mock.backend.service.js.map