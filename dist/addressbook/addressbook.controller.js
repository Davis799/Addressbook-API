"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressbookController = void 0;
const common_1 = require("@nestjs/common");
const addressbook_service_1 = require("./addressbook.service");
let AddressbookController = class AddressbookController {
    constructor(addressbookservice) {
        this.addressbookservice = addressbookservice;
    }
    addAddress(addyName, addyPhone, addyEmail, addyWork) {
        const added = this.addressbookservice.insertAddress(addyName, addyPhone, addyEmail, addyWork);
        return added;
    }
    getAllAddresses() {
        return this.addressbookservice.getAddresses();
    }
    getAddress(id) {
        return this.addressbookservice.getSingleAddress(id);
    }
    deleteAddress(id) {
        this.addressbookservice.deleteAddress(id);
        return null;
    }
    updateAddress(id, addyName, addyPhone, addyEmail, addyWork) {
        this.addressbookservice.updateAddress(id, addyName, addyPhone, addyEmail, addyWork);
        return 'Successfully updated';
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('phone')),
    __param(2, (0, common_1.Body)('email')),
    __param(3, (0, common_1.Body)('work')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String, String]),
    __metadata("design:returntype", void 0)
], AddressbookController.prototype, "addAddress", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AddressbookController.prototype, "getAllAddresses", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AddressbookController.prototype, "getAddress", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AddressbookController.prototype, "deleteAddress", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('phone')),
    __param(3, (0, common_1.Body)('email')),
    __param(4, (0, common_1.Body)('work')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, String, String]),
    __metadata("design:returntype", void 0)
], AddressbookController.prototype, "updateAddress", null);
AddressbookController = __decorate([
    (0, common_1.Controller)('addressbook'),
    __metadata("design:paramtypes", [addressbook_service_1.AddressbookService])
], AddressbookController);
exports.AddressbookController = AddressbookController;
//# sourceMappingURL=addressbook.controller.js.map