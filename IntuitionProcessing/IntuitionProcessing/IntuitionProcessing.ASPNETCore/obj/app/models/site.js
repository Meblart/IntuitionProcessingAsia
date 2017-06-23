"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Site = (function () {
    function Site(integrationType, comment, url, id) {
        if (id === void 0) { id = -1; }
        this.integrationType = integrationType;
        this.comment = comment;
        this.url = url;
        this.lmses = new Array();
        this.products = new Array();
        this.id = id;
    }
    return Site;
}());
exports.Site = Site;
//# sourceMappingURL=site.js.map