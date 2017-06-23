"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client = (function () {
    function Client(code, name, comment, id) {
        if (id === void 0) { id = -1; }
        this.code = code;
        this.name = name;
        this.comment = comment;
        this.sites = new Array();
        this.id = id;
    }
    Client.prototype.getSite = function (id) {
        return this.sites.find(function (value, index, obj) { return value.id == id; });
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map