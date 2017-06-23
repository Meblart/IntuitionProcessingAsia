import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { UsersBackendService } from './users-backend.service';

var users__: User[] = [
	new User("user name 1", "user1@email.com", "111-111-111", 1),
	new User("user name 2", "user2@email.com", "222-222-222", 2),
	new User("user name 3", "user3@email.com", "333-333-333", 3)
];

@Injectable()
export class MockUsersBackendService extends UsersBackendService {
	getAllUsers(): Observable<User[]> {
		return Observable.of(users__).delay(2000);
	}

	getUser(id: number): Observable<User> {
		return Observable.of(users__.find((value, index, obj) => { return value.id === id; }));
	}

	saveUser(userToSave: User): Observable<void> {
		let foundUser = users__.find((value, index, obj) => value.id === userToSave.id);
		let foundUserIndex = users__.indexOf(foundUser);
		users__.splice(foundUserIndex, 1, userToSave);
		return Observable.empty<void>();
	}

	addUser(userToAdd: User): Observable<User> {
		let newId = users__.length + 1;
		userToAdd = new User(userToAdd.name, userToAdd.email, userToAdd.phone, newId);
		//emualte adding user to db
		users__.push(userToAdd);
		return Observable.of(userToAdd);
	}

	deleteUser(id: number): Observable<void> {
		return Observable.empty<void>();
	}
}