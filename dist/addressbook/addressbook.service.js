"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressbookService = void 0;
const common_1 = require("@nestjs/common");
const addressbook_model_1 = require("./addressbook.model");
const shortid_1 = require("shortid");
let AddressbookService = class AddressbookService {
    constructor() {
        this.address = [];
    }
    insertAddress(name, phone, email, work) {
        const id = (0, shortid_1.generate)();
        const newAddress = new addressbook_model_1.Address(id, name, phone, email, work);
        this.address.push(newAddress);
        return newAddress;
    }
    getAddresses() {
        return this.address.slice();
    }
    getSingleAddress(AddyId) {
        const SingleAddress = this.address.find((address) => address.id === AddyId);
        if (!SingleAddress) {
            throw new common_1.NotFoundException('Could not find the address');
        }
        return Object.assign({}, SingleAddress);
    }
    deleteAddress(AddyId) {
        const SingleAddress = this.address.find((address) => address.id === AddyId);
        if (!SingleAddress) {
            throw new common_1.NotFoundException('Could not find the address');
        }
        this.address.splice(0, 1);
    }
    updateAddress(AddyId, name, phone, email, work) {
        const [address, index] = this.findAddress(AddyId);
        const updatedAddress = Object.assign({}, address);
        if (name) {
            updatedAddress.name = name;
        }
        if (phone) {
            updatedAddress.phone = phone;
        }
        if (email) {
            updatedAddress.email = email;
        }
        if (work) {
            updatedAddress.work = work;
        }
        this.address[index] = updatedAddress;
    }
    findAddress(id) {
        const SingleAddressIndex = this.address.findIndex((address) => address.id === id);
        const SingleAddress = this.address[SingleAddressIndex];
        if (!SingleAddress) {
            throw new common_1.NotFoundException('Could not find the address');
        }
        return [SingleAddress, SingleAddressIndex];
    }
};
AddressbookService = __decorate([
    (0, common_1.Injectable)()
], AddressbookService);
exports.AddressbookService = AddressbookService;
//# sourceMappingURL=addressbook.service.js.map