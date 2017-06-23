import { Client } from '../models/client';
import { Setup } from '../models/setup';

export class CurrentDataService {
	private _currentClient: Client;

	set currentClient(value: Client) {
		this._currentClient = value;
	}

	get currentClient(): Client {
		return this._currentClient;
	}

	private _setup: Setup;
	set setup(value: Setup) {
		this._setup = value;
	}

	get setup(): Setup {
		return this._setup;
	}
}