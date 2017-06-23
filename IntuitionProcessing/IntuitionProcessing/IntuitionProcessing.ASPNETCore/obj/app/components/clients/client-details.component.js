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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var client_1 = require("../../models/client");
var client_service_1 = require("./services/client.service");
var current_data_service_1 = require("../../services/current-data.service");
var base_component_1 = require("../../models/base.component");
var ClientDetailsComponent = (function (_super) {
    __extends(ClientDetailsComponent, _super);
    function ClientDetailsComponent(clientService, currentDataService, location, route, router) {
        var _this = _super.call(this, location) || this;
        _this.clientService = clientService;
        _this.currentDataService = currentDataService;
        _this.location = location;
        _this.route = route;
        _this.router = router;
        return _this;
    }
    Object.defineProperty(ClientDetailsComponent.prototype, "client", {
        get: function () {
            return this._client;
        },
        set: function (value) {
            this._client = value;
            this.isNewClient = this._client.id == -1;
            this.currentDataService.currentClient = this._client;
        },
        enumerable: true,
        configurable: true
    });
    ClientDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._client = null;
        this.route.params.switchMap(function (params) {
            var ret;
            var clientId = params['id'];
            //if negative client id was provided it means new client should be created for component
            if (clientId < 0) {
                _this.isNewClient = true;
                ret = Promise.resolve(new client_1.Client("", "", ""));
            }
            else {
                _this.isNewClient = false;
                try {
                    ret = _this.clientService.getClient(clientId);
                }
                catch (e) {
                    ret = Promise.reject("Unable to get client " + clientId + " " + e.Message);
                }
            }
            return ret;
        }).subscribe(function (client) { return _this.client = client; }, function (error) { return _this.error = error; });
    };
    ClientDetailsComponent.prototype.onSaveClient = function () {
        var _this = this;
        //TODO handle all failures and creating new client in more elegant way
        if (this.isNewClient) {
            this.clientService.addClient(this.client).then(function (createdClientId) { return _this.client = new client_1.Client(_this.client.code, _this.client.name, _this.client.comment, createdClientId); });
        }
        else {
            this.clientService.saveClient(this.client);
        }
    };
    ClientDetailsComponent.prototype.addSite = function (selectedSiteId) {
        this.router.navigate(['./clients/client-details/site-details/new-site']);
    };
    ClientDetailsComponent.prototype.siteDetails = function (selectedSiteId) {
        this.router.navigate(['./clients/client-details/site-details', selectedSiteId]);
    };
    ClientDetailsComponent.prototype.onGoBack = function () {
        this.location.back();
    };
    return ClientDetailsComponent;
}(base_component_1.BaseComponent));
ClientDetailsComponent = __decorate([
    core_1.Component({
        selector: 'client-details',
        templateUrl: './client-details.component.html',
    }),
    __metadata("design:paramtypes", [client_service_1.ClientService,
        current_data_service_1.CurrentDataService,
        common_1.Location,
        router_1.ActivatedRoute,
        router_1.Router])
], ClientDetailsComponent);
exports.ClientDetailsComponent = ClientDetailsComponent;
//# sourceMappingURL=client-details.component.js.map