import { Injectable } from '@angular/core';
import { BackendService } from '../../../services/backend.service';

import { Client } from '../../../models/client';
import { Site } from '../../../models/site';
import { Product } from '../../../models/product';

@Injectable()
export class ClientService {
	constructor(private backend: BackendService) {
	}

	getAllClients(): Promise<Client[]> {
		return this.backend.getClients([]);
	}

	getClient(id: number): Promise<Client> {
		return this.backend.getClient(id);
	}

	saveClient(clientToSave: Client) {
		this.backend.saveClient(clientToSave);
	}

	addClient(clientToAdd: Client): Promise<number> {
		return this.backend.addClient(clientToAdd);
	}

	saveSite(siteToSave: Site): Promise<void> {
		return this.backend.saveSite(siteToSave);
	}

	addSiteToClient(clientId: number, siteToAdd: Site): Promise<number> {
		return this.backend.addSite(clientId, siteToAdd);
	}

	addProductToSite(siteId: number, productToAdd: Product): Promise<void> {
		return Promise.resolve();
	}

	removeProductFromSite(siteId: number, productToRemove: Product): Promise<void> {
		return Promise.resolve();
	}
}