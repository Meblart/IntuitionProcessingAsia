export class User {
	readonly id: number;
	constructor(readonly name: string, readonly email: string, readonly phone: string, id: number = -1) {
		this.id = id;
	}
}