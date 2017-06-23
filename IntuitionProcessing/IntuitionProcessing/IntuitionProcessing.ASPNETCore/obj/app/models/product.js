"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = (function () {
    function Product(name, comment, version, id) {
        if (id === void 0) { id = -1; }
        this.name = name;
        this.comment = comment;
        this.version = version;
        this.id = id;
    }
    Product.prototype.toString = function () {
        return this.name + " " + this.version;
    };
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map