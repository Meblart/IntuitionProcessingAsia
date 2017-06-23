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
var backend_service_1 = require("../../../services/backend.service");
var ClientService = (function () {
    function ClientService(backend) {
        this.backend = backend;
    }
    ClientService.prototype.getAllClients = function () {
        return this.backend.getClients([]);
    };
    ClientService.prototype.getClient = function (id) {
        return this.backend.getClient(id);
    };
    ClientService.prototype.saveClient = function (clientToSave) {
        this.backend.saveClient(clientToSave);
    };
    ClientService.prototype.addClient = function (clientToAdd) {
        return this.backend.addClient(clientToAdd);
    };
    ClientService.prototype.saveSite = function (siteToSave) {
        return this.backend.saveSite(siteToSave);
    };
    ClientService.prototype.addSiteToClient = function (clientId, siteToAdd) {
        return this.backend.addSite(clientId, siteToAdd);
    };
    ClientService.prototype.addProductToSite = function (siteId, productToAdd) {
        return Promise.resolve();
    };
    ClientService.prototype.removeProductFromSite = function (siteId, productToRemove) {
        return Promise.resolve();
    };
    return ClientService;
}());
ClientService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [backend_service_1.BackendService])
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map