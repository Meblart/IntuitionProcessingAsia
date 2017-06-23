import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Client } from '../models/client';

@Injectable()
export abstract class ClientAssignmentsBackendService {
	abstract getClientsAssignedToUser(userId: number): Observable<Array<Client>>;

	abstract unassignClientFromUser(userId: number, clientId: number): Observable<void>;

	abstract assignClientToUser(userId: number, clientId: number): Observable<void>;
}