import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Client } from '../../models/client';
import { Site } from '../../models/site';
import { Product } from '../../models/product';

import { BaseComponent } from '../../models/base.component';

import { CurrentDataService } from '../../services/current-data.service';
import { ClientService } from './services/client.service';

@Component({
	selector: 'site-details',
	templateUrl: './site-details.component.html'
})
export class SiteDetailsComponent extends BaseComponent {

	_site: Site;
	set site(value: Site) {
		this._site = value;
	}

	get site(): Site {
		return this._site;
	}

	isNewSite: boolean;
	readonly siteTypes: Array<string> = ["AICC", "Hosted", "SCORM"];

	constructor(private currentDataService: CurrentDataService,
		private clientService: ClientService,
		private location: Location,
		private route: ActivatedRoute) {
		super(location);
	}

	ngOnInit(): void {
		this.route.params.switchMap((params: Params) => {
			let ret: Promise<Site>;
			let siteId  = params['id'];
			//if site id is negative it means new site is being created
			if (siteId === undefined || siteId == "new-site" || +siteId < 0) {
				this.site = new Site('', '', '');
				this.isNewSite = true;
				ret = Promise.resolve(this.site);
			}
			//otherwise get site by id from current data
			else {
				this.isNewSite = false;
				if (this.currentDataService.currentClient === undefined || this.currentDataService.currentClient === null) {
					ret = Promise.reject("No current client");
				}
				else if (this.currentDataService.currentClient.getSite(+siteId) === undefined) {
					ret = Promise.reject("Site not found");
				}
				else {
					ret = Promise.resolve(this.currentDataService.currentClient.getSite(+siteId));
				}
			}

			return ret;
		}).subscribe(site => this.site = site, error => this.error = error);
	}

	saveSite(): void {
		if (this.isNewSite) {
			this.clientService.addSiteToClient(this.currentDataService.currentClient.id, this.site).
				then(createdSiteId => {
					this.site = new Site(this.site.integrationType, this.site.comment, this.site.url, createdSiteId);
					this.isNewSite = false;
				}).catch(error => this.error = error);
		}
		else {
			this.clientService.saveSite(this.site).catch(error => this.error = error);
		}
	}

	isAddingNewProduct: boolean;
	addProduct(): void {
		this.productToAdd = undefined;
		this.isAddingNewProduct = true;
	}

	cancelAddingProduct(): void {
		this.productToAdd = undefined;
		this.isAddingNewProduct = false;
	}

	productToAdd: Product;
	saveProductToAdd() {
		if (this.isAddingNewProduct && this.productToAdd !== undefined && this.productToAdd !== null) {
			this.clientService.addProductToSite(this.site.id, this.productToAdd).then(() => {
				this.site.products.push(this.productToAdd);
				this.productToAdd = undefined;
				this.isAddingNewProduct = false;
			}).catch(error => this.error = error);
		}
	}

	removeProduct(prodToRemove: Product) {
		if (prodToRemove !== undefined && prodToRemove !== null) {
			let prodIndex = this.site.products.indexOf(prodToRemove);
			if (prodIndex >= 0) {
				this.clientService.removeProductFromSite(this.site.id, prodToRemove).
					then(() => this.site.products.splice(prodIndex)).
					catch(error => this.error = error);
			}
		}
	}

	onGoBack():void {
		this.location.back();
	}
}