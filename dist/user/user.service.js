"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const shortid_1 = require("shortid");
const user_model_1 = require("./user.model");
let UserService = class UserService {
    constructor() {
        this.user = [];
    }
    insertUser(username, email) {
        const id = (0, shortid_1.generate)();
        const newUser = new user_model_1.User(id, username, email);
        this.user.push(newUser);
        return newUser;
    }
    getUser() {
        return this.user.slice();
    }
    deleteUser(id) {
        const SingleUser = this.user.find((user) => user.userid === id);
        if (!SingleUser) {
            throw new common_1.NotFoundException('Could not find the address');
        }
        this.user.splice(0, 1);
    }
    updateUser(userid, username, email) {
        const [user, index] = this.findUser(userid);
        const updatedUser = Object.assign({}, user);
        if (username) {
            updatedUser.username = username;
        }
        if (email) {
            updatedUser.email = email;
        }
        this.user[index] = updatedUser;
    }
    findUser(id) {
        const SingleUserIndex = this.user.findIndex((user) => user.userid === id);
        const SingleUser = this.user[SingleUserIndex];
        if (!SingleUser) {
            throw new common_1.NotFoundException('Could not find the address');
        }
        return [SingleUser, SingleUserIndex];
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map