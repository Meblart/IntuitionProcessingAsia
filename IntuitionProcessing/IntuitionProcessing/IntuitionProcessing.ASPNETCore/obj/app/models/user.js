"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(name, email, phone, id) {
        if (id === void 0) { id = -1; }
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.id = id;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map