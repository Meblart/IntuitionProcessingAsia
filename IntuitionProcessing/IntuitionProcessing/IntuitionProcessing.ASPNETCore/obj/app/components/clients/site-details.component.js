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
var site_1 = require("../../models/site");
var base_component_1 = require("../../models/base.component");
var current_data_service_1 = require("../../services/current-data.service");
var client_service_1 = require("./services/client.service");
var SiteDetailsComponent = (function (_super) {
    __extends(SiteDetailsComponent, _super);
    function SiteDetailsComponent(currentDataService, clientService, location, route) {
        var _this = _super.call(this, location) || this;
        _this.currentDataService = currentDataService;
        _this.clientService = clientService;
        _this.location = location;
        _this.route = route;
        _this.siteTypes = ["AICC", "Hosted", "SCORM"];
        return _this;
    }
    Object.defineProperty(SiteDetailsComponent.prototype, "site", {
        get: function () {
            return this._site;
        },
        set: function (value) {
            this._site = value;
        },
        enumerable: true,
        configurable: true
    });
    SiteDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            var ret;
            var siteId = params['id'];
            //if site id is negative it means new site is being created
            if (siteId === undefined || siteId == "new-site" || +siteId < 0) {
                _this.site = new site_1.Site('', '', '');
                _this.isNewSite = true;
                ret = Promise.resolve(_this.site);
            }
            else {
                _this.isNewSite = false;
                if (_this.currentDataService.currentClient === undefined || _this.currentDataService.currentClient === null) {
                    ret = Promise.reject("No current client");
                }
                else if (_this.currentDataService.currentClient.getSite(+siteId) === undefined) {
                    ret = Promise.reject("Site not found");
                }
                else {
                    ret = Promise.resolve(_this.currentDataService.currentClient.getSite(+siteId));
                }
            }
            return ret;
        }).subscribe(function (site) { return _this.site = site; }, function (error) { return _this.error = error; });
    };
    SiteDetailsComponent.prototype.saveSite = function () {
        var _this = this;
        if (this.isNewSite) {
            this.clientService.addSiteToClient(this.currentDataService.currentClient.id, this.site).
                then(function (createdSiteId) {
                _this.site = new site_1.Site(_this.site.integrationType, _this.site.comment, _this.site.url, createdSiteId);
                _this.isNewSite = false;
            }).catch(function (error) { return _this.error = error; });
        }
        else {
            this.clientService.saveSite(this.site).catch(function (error) { return _this.error = error; });
        }
    };
    SiteDetailsComponent.prototype.addProduct = function () {
        this.productToAdd = undefined;
        this.isAddingNewProduct = true;
    };
    SiteDetailsComponent.prototype.cancelAddingProduct = function () {
        this.productToAdd = undefined;
        this.isAddingNewProduct = false;
    };
    SiteDetailsComponent.prototype.saveProductToAdd = function () {
        var _this = this;
        if (this.isAddingNewProduct && this.productToAdd !== undefined && this.productToAdd !== null) {
            this.clientService.addProductToSite(this.site.id, this.productToAdd).then(function () {
                _this.site.products.push(_this.productToAdd);
                _this.productToAdd = undefined;
                _this.isAddingNewProduct = false;
            }).catch(function (error) { return _this.error = error; });
        }
    };
    SiteDetailsComponent.prototype.removeProduct = function (prodToRemove) {
        var _this = this;
        if (prodToRemove !== undefined && prodToRemove !== null) {
            var prodIndex_1 = this.site.products.indexOf(prodToRemove);
            if (prodIndex_1 >= 0) {
                this.clientService.removeProductFromSite(this.site.id, prodToRemove).
                    then(function () { return _this.site.products.splice(prodIndex_1); }).
                    catch(function (error) { return _this.error = error; });
            }
        }
    };
    SiteDetailsComponent.prototype.onGoBack = function () {
        this.location.back();
    };
    return SiteDetailsComponent;
}(base_component_1.BaseComponent));
SiteDetailsComponent = __decorate([
    core_1.Component({
        selector: 'site-details',
        templateUrl: './site-details.component.html'
    }),
    __metadata("design:paramtypes", [current_data_service_1.CurrentDataService,
        client_service_1.ClientService,
        common_1.Location,
        router_1.ActivatedRoute])
], SiteDetailsComponent);
exports.SiteDetailsComponent = SiteDetailsComponent;
//# sourceMappingURL=site-details.component.js.map