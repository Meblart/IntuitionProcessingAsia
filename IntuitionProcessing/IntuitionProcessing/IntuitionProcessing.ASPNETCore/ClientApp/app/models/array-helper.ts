export class ArrayHelper {
	/**
	 * Remove item from provided strong-typed array. indexOf is used to find a match. Returns true if item was removed, otherwise false
	 * @param itemsArray array to remove item from
	 * @param item item to remove
	 */
	public static removeItem<T>(itemsArray: Array<T>, item: T): boolean {
		let ret: boolean = false;
		let foundItemIndex: number = itemsArray.indexOf(item);
		if (foundItemIndex !== -1) {
			itemsArray.splice(foundItemIndex, 1);
			ret = true;
		}
		return ret;
	}
}