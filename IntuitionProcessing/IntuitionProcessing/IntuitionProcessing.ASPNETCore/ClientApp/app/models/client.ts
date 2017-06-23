import { Site } from './site';
import { User } from './user';

export class Client {
	readonly id: number;
	readonly sites = new Array<Site>();
	public accountManager: User;

	constructor(readonly code: string, readonly name: string, readonly comment: string, id: number = -1) {
		this.id = id;
	}

	getSite(id: number): Site {
		return this.sites.find((value, index, obj) => value.id == id);
	}
}