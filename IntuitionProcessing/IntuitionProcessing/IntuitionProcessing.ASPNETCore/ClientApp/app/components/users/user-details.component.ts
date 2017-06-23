import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { UsersService } from './services/users.service';
import { BaseComponent } from '../../models/base.component';
import { User } from '../../models/user';
import { Client } from '../../models/client';
import { ArrayHelper } from '../../models/array-helper';

@Component({
	selector: 'user-details',
	templateUrl: './user-details.component.html'
})
export class UserDetailsComponent extends BaseComponent implements OnInit {
	private _user: User;
	get user(): User {
		return this._user;
	}

	set user(value: User) {
		this._user = value;
	}

	private _assignedClients: Array<Client>;
	get assignedClients(): Array<Client> {
		return this._assignedClients;
	}

	set assignedClients(value: Array<Client>) {
		this._assignedClients = value;
	}

	constructor(private usersService: UsersService,
		private route: ActivatedRoute,
		private location: Location) {
		super(location);
	}

	isNewUser: boolean = false;
	isClientLookup: boolean = false;

	ngOnInit(): void {
		this.route.params.switchMap((params: Params) => {
			let ret: Observable<[User, Array<Client>]>;
			let userId = params['id'];
			//if this is new user, initialize empty user
			if (userId === undefined || userId == "new-user" || userId == "" || +userId < 0) {
				let newUserWithClients: [User, Array<Client>] = [new User("", "", ""), new Array<Client>()];
				ret = Observable.of(newUserWithClients);
				this.isNewUser = true;
			}
			else {
				this.showProgress("Downloading user...");
				ret = this.usersService.getUserWithAssignedClients(+userId);
				this.isNewUser = false;
			}

			return ret;
		}).subscribe(
			userWithAssignedClients => {
				this.hideProgress();
				this.user = userWithAssignedClients[0];
				this.assignedClients = userWithAssignedClients[1];
			},
			error => this.error = error);
	}

	saveUser(): void {
		this.showProgress("Saving user...");
		if (this.isNewUser) {
			this.usersService.addUser(this.user).subscribe(
				addedUser => this.hideProgressAndGoBack(),
				error => this.contextError = error);
		}
		else {
			this.usersService.saveUser(this.user).subscribe(
				//void observable doesn't emit values - it can only complete of fail
				() => { },
				error => this.contextError = error,
				() => this.hideProgressAndGoBack());
		}
	}

	openLookupClients(): void {
		this.isClientLookup = true;
	}

	closeLookupClients(): void {
		this.isClientLookup = false;
	}

	unassignClient(clientToUnassign: Client): void {
		this.showProgress("Unassigning client...");
		this.usersService.unassignUser(this.user, clientToUnassign).subscribe(
			//void observable doesn't emit values - it can only complete of fail
			() => { },
			error => this.contextError = error,
			//remove client from local assigned clients if client was unassigned in service
			() => { this.hideProgress(); ArrayHelper.removeItem<Client>(this.assignedClients, clientToUnassign); });
	}
}