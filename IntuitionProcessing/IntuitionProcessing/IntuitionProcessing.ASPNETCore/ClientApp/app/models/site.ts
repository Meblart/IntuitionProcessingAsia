import { LMS } from './lms';
import { Product } from './product';

export class Site {
	readonly id: number;
	readonly lmses = new Array<LMS>();
	readonly products = new Array<Product>();

	constructor(readonly integrationType: string, readonly comment: string, readonly url: string, id: number = -1) {
		this.id = id;
	}
}