import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { UsersBackendService } from '../../../services/users-backend.service';
import { ClientAssignmentsBackendService } from '../../../services/client-assignments-backend.service';
import { BackendService } from '../../../services/backend.service';
import { User } from '../../../models/user';
import { Client } from '../../../models/client';

@Injectable()
export class UsersService {
	constructor(private usersBackendService: UsersBackendService,
		private clientAssignmentsbackendService: ClientAssignmentsBackendService,
		private backendService: BackendService)
	{}

	getAllUsers(): Observable<User[]> {
		return this.usersBackendService.getAllUsers();
	}

	getUser(id: number): Observable<User> {
		if (id === undefined || id < 0) {
			return Observable.throw("User id must be provided to get a user");
		}
		else {
			return this.usersBackendService.getUser(id);
		}
	}

	getUserWithAssignedClients(id: number): Observable<[User, Array<Client>]> {
		if (id === undefined || id < 0) {
			return Observable.throw("User id must be provided to get assigned clients");
		}
		else {
			let foundUser: User;
			//get user first
			return this.usersBackendService.getUser(id)
				.switchMap(user => {
					foundUser = user;
					//once user was emitted query for assigned clients
					return this.clientAssignmentsbackendService.getClientsAssignedToUser(id);
				})
				.map(userClients => {
					let ret: [User, Array<Client>];
					//map returned clients to parent user emitted be source query
					ret = [foundUser, userClients];
					return ret;
				});
		}
	}

	saveUser(user: User): Observable<void> {
		if (user == null) {
			return Observable.throw<void>("User must be provided");
		}
		else {
			return this.usersBackendService.saveUser(user);
		}
	}

	addUser(user: User): Observable<User> {
		if (user == null) {
			return Observable.throw<void>("User must be provided");
		}
		else {
			return this.usersBackendService.addUser(user);
		}
	}

	deleteUser(id: number): Observable<void> {
		if (id === undefined || id < 0) {
			return Observable.throw<void>("User id must be provided to delete user");
		}
		else {
			return this.usersBackendService.deleteUser(id);
		}
	}

	getClientsByPattern(pattern: string): Observable<Array<Client>> {
		if (pattern === undefined || pattern === "") {
			return Observable.throw<Client>("Client pattern must be provided");
		}
		else {
			return this.backendService.getClientsByPattern(pattern);
		}
	}

	assignClient(user: User, client: Client, assignedClients: Array<Client>): Observable<void> {
		if (user == null || client == null) {
			return Observable.throw<void>("User and Client must be provided to create an assignment");
		}
		else if (assignedClients != null && assignedClients.some(value => value.id === client.id)) {
			return Observable.throw<void>(`Client ${client.code} is already assigned`);
		}
		else {
			return this.clientAssignmentsbackendService.assignClientToUser(user.id, client.id);
		}
	}

	unassignUser(user: User, client: Client): Observable<void> {
		if (user == null || client == null) {
			return Observable.throw<void>("User and Client must be provided to unassign client");
		}
		else {
			return this.clientAssignmentsbackendService.unassignClientFromUser(user.id, client.id);
		}
	}
}