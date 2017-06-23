import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { Site } from '../models/site';
import { Setup } from '../models/setup';
import { Case } from '../models/case';

@Injectable()
export abstract class BackendService {

	abstract getClients(clientIds: string[]): Promise<Client[]>;

	abstract getClientsByPattern(clientPattern: string): Observable<Array<Client>>;

	abstract getClient(clientId: number): Promise<Client>;

	abstract saveClient(clientToSave: Client): Promise<string>;

	abstract addClient(clientToAdd: Client): Promise<number>;

	abstract getSetup(): Promise<Setup>;

	abstract addSite(clientId: number, siteToAdd: Site): Promise<number>;

	abstract saveSite(siteToAdd: Site): Promise<void>;

	abstract getCases(clientIds: string[]): Promise<Case[]>;

	//abstract getCase(caseId: number): Promise<Client>;
}