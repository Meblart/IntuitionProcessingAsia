import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

import { Client } from '../../models/client';
import { User } from '../../models/user';
import { BaseComponent } from '../../models/base.component';
import { UsersService } from './services/users.service';

@Component({
	selector: "assign-client",
	templateUrl: "./assign-client.component.html"
})
export class AssignClientComponent extends BaseComponent implements OnInit {
	@Input() currentUser: User;
	@Input() assignedClients: Array<Client>;
	@Output() assignmentsDone: EventEmitter<any> = new EventEmitter();
	clientLookup = new FormControl();

	private _foundClients: Observable<Array<Client>>;
	get foundClients(): Observable<Array<Client>> {
		return this._foundClients;
	}

	set foundClients(value: Observable<Array<Client>>) {
		this._foundClients = value;
	}

	constructor(private usersService: UsersService,
		private location: Location) {
		super(location);
	}

	ngOnInit(): void {
		this.foundClients = this.clientLookup.valueChanges
			.debounceTime(400)
			.distinctUntilChanged()
			.filter(value => (value as string).length >= 2)
			.switchMap(value => this.usersService.getClientsByPattern(value));
	}

	assignClient(clientToAssign: Client): void {
		this.showProgress("Assigning client...");
		this.usersService.assignClient(this.currentUser, clientToAssign, this.assignedClients).subscribe(
			() => { },
			error => this.contextError = error,
			//add client to local assigned clients if client was assigned in service
			() => { this.hideProgress(); this.assignedClients.push(clientToAssign); });
	}

	closeClientsAssignments(): void {
		this.assignmentsDone.emit(null);
	}
}