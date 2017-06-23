export class Product {
	readonly id: number;
	constructor(readonly name: string, readonly comment: string, readonly version: string, id: number = -1) {
		this.id = id;
	}

	toString(): string {
		return this.name + " " + this.version;
	}
}