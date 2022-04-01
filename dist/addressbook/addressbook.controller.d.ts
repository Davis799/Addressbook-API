import { AddressbookService } from './addressbook.service';
export declare class AddressbookController {
    private addressbookservice;
    constructor(addressbookservice: AddressbookService);
    addAddress(addyName: string, addyPhone: number, addyEmail: string, addyWork: string): import("./addressbook.model").Address;
    getAllAddresses(): import("./addressbook.model").Address[];
    getAddress(id: string): {
        id: string;
        name: string;
        phone: number;
        email: string;
        work: string;
    };
    deleteAddress(id: string): any;
    updateAddress(id: string, addyName: string, addyPhone: number, addyEmail: string, addyWork: string): string;
}
