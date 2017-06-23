import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Client } from '../../models/client';
import { ClientService } from './services/client.service';
import { CurrentDataService } from '../../services/current-data.service';

import { BaseComponent } from '../../models/base.component';

@Component({
	selector: 'client-details',
	templateUrl: './client-details.component.html',
})
export class ClientDetailsComponent extends BaseComponent implements OnInit {

	_client: Client;
	set client(value: Client) {
		this._client = value;
		this.isNewClient = this._client.id == -1;
		this.currentDataService.currentClient = this._client;
	}

	get client(): Client {
		return this._client;
	}

	constructor(private clientService: ClientService,
		private currentDataService: CurrentDataService,
		private location: Location,
		private route: ActivatedRoute,
		private router: Router) {
		super(location);
	}

	isNewClient: boolean;
	ngOnInit(): void {
		this._client = null;
		this.route.params.switchMap((params: Params) => {
			let ret: Promise<Client>;
			let clientId: number = params['id'];
			//if negative client id was provided it means new client should be created for component
			if (clientId < 0) {
				this.isNewClient = true;
				ret = Promise.resolve(new Client("", "", ""));
			}
			//if client id was provided - query server for it's full data
			else {
				this.isNewClient = false;
				try {
					ret = this.clientService.getClient(clientId);
				}
				catch (e) {
					ret = Promise.reject("Unable to get client " + clientId + " " + e.Message);
				}
			}
			return ret;
		}
		).subscribe(client => this.client = client, error => this.error = error);
	}

	onSaveClient(): void {
		//TODO handle all failures and creating new client in more elegant way
		if (this.isNewClient) {
			this.clientService.addClient(this.client).then(createdClientId => this.client = new Client(this.client.code, this.client.name, this.client.comment, createdClientId));
		}
		else {
			this.clientService.saveClient(this.client);
		}
	}

	addSite(selectedSiteId: number): void {
		this.router.navigate(['./clients/client-details/site-details/new-site']);
	}

	siteDetails(selectedSiteId: number): void {
		this.router.navigate(['./clients/client-details/site-details', selectedSiteId]);
	}

	onGoBack(): void {
		this.location.back();
	}
}