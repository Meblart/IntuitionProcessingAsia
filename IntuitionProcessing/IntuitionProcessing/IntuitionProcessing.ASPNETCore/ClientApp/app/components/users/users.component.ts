import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { UsersService } from './services/users.service';
import { User } from '../../models/user';
import { ArrayHelper } from '../../models/array-helper';

import { BaseComponent } from '../../models/base.component';

@Component({
	selector: 'users',
	templateUrl: './users.component.html'
})
export class UsersComponent extends BaseComponent implements OnInit {
	_users: User[];
	get users(): User[] {
		return this._users;
	}

	set users(value: User[]) {
		this._users = value;
	}

	constructor(private usersService: UsersService,
		private location: Location,
		private router: Router) {
		super(location);
	}

	ngOnInit(): void {
		this.showProgress("Downloading users...");
		this.usersService.getAllUsers().subscribe(
			users => { this.hideProgress(); this.users = users; },
			error => this.error = error);
	}

	editUser(selectedUserId: number): void {
		this.router.navigate(['./users/user-details', selectedUserId])
	}

	deleteUser(userToDelete: User): void {
		this.showProgress("Deleting user...");
		this.usersService.deleteUser(userToDelete.id).subscribe(
			//void observable doesn't emit values - it can only complete of fail
			() => { },
			error => this.contextError = error,
			() => {
				this.hideProgress();
				//when user has been removed from backend - reflect that in local list
				ArrayHelper.removeItem<User>(this.users, userToDelete);
			});
	}

	addUser(): void {
		this.router.navigate(['./users/user-details/new-user']);
	}
}