import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientService } from './services/client.service';
import { Client } from '../../models/client';

@Component({
    selector: 'clients',
    templateUrl: './clients.component.html',
})
export class ClientsComponent implements OnInit {
    private clients: Client[];
    currentClient: Client;
    status: string;

    constructor(private clientService: ClientService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.clientService.getAllClients().then((value: Client[]) => this.clients = value).catch((reason: any) => this.status = reason);
    }

    onSelect(selectedClient: Client) {
        this.currentClient = selectedClient;
    }

    addClient(): void {
        this.router.navigate(['./clients/client-details', -1]);
	}

	clientDetails(selectedClientId: number): void {
		this.router.navigate(['./clients/client-details', selectedClientId]);
	}
}