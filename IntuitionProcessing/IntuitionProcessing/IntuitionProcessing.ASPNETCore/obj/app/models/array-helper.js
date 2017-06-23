"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayHelper = (function () {
    function ArrayHelper() {
    }
    /**
     * Remove item from provided strong-typed array. indexOf is used to find a match. Returns true if item was removed, otherwise false
     * @param itemsArray array to remove item from
     * @param item item to remove
     */
    ArrayHelper.removeItem = function (itemsArray, item) {
        var ret = false;
        var foundItemIndex = itemsArray.indexOf(item);
        if (foundItemIndex !== -1) {
            itemsArray.splice(foundItemIndex, 1);
            ret = true;
        }
        return ret;
    };
    return ArrayHelper;
}());
exports.ArrayHelper = ArrayHelper;
//# sourceMappingURL=array-helper.js.map