import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable()
export abstract class UsersBackendService {
	abstract getAllUsers(): Observable<User[]>;

	abstract getUser(id: number): Observable<User>;

	abstract saveUser(userToSave: User): Observable<void>;

	//add new user and return that user with all (including DB id) fields populated
	abstract addUser(userToAdd: User): Observable<User>;

	abstract deleteUser(id: number): Observable<void>;
}