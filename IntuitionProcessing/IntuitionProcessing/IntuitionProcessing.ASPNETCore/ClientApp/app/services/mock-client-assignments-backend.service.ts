import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { ClientAssignmentsBackendService } from './client-assignments-backend.service';
import { Client } from '../models/client';

var assignments__ = [
	{
		userId: 1,
		clients: [new Client("AAM", "AAM long descriptive name", "AAM comment", 1), new Client("BBVA", "BBVA long even more descriptive name", "BBVA comment", 2)]
	},
];

@Injectable()
export class MockClientAssignmentsBackendService extends ClientAssignmentsBackendService {
	getClientsAssignedToUser(userId: number): Observable<Client[]> {
		let clients: Array<Client>;
		let assignment = assignments__.find(value => value.userId === userId);
		if (assignment !== undefined) {
			clients = assignment.clients;
		}
		return Observable.of(clients);
	}
	unassignClientFromUser(userId: number, clientId: number): Observable<void> {
		return Observable.empty<void>();
	}
	assignClientToUser(userId: number, clientId: number): Observable<void> {
		return Observable.empty<void>();
	}


}