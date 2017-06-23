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
var router_1 = require("@angular/router");
var client_service_1 = require("./services/client.service");
var ClientsComponent = (function () {
    function ClientsComponent(clientService, router) {
        this.clientService = clientService;
        this.router = router;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getAllClients().then(function (value) { return _this.clients = value; }).catch(function (reason) { return _this.status = reason; });
    };
    ClientsComponent.prototype.onSelect = function (selectedClient) {
        this.currentClient = selectedClient;
    };
    ClientsComponent.prototype.addClient = function () {
        this.router.navigate(['./clients/client-details', -1]);
    };
    ClientsComponent.prototype.clientDetails = function (selectedClientId) {
        this.router.navigate(['./clients/client-details', selectedClientId]);
    };
    return ClientsComponent;
}());
ClientsComponent = __decorate([
    core_1.Component({
        selector: 'clients',
        templateUrl: './clients.component.html',
    }),
    __metadata("design:paramtypes", [client_service_1.ClientService,
        router_1.Router])
], ClientsComponent);
exports.ClientsComponent = ClientsComponent;
//# sourceMappingURL=clients.component.js.map