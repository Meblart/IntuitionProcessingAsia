"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CurrentDataService = (function () {
    function CurrentDataService() {
    }
    Object.defineProperty(CurrentDataService.prototype, "currentClient", {
        get: function () {
            return this._currentClient;
        },
        set: function (value) {
            this._currentClient = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentDataService.prototype, "setup", {
        get: function () {
            return this._setup;
        },
        set: function (value) {
            this._setup = value;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentDataService;
}());
exports.CurrentDataService = CurrentDataService;
//# sourceMappingURL=current-data.service.js.map