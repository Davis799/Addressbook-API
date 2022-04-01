import { Address } from './addressbook.model';
export declare class AddressbookService {
    private address;
    insertAddress(name: string, phone: number, email: string, work: string): Address;
    getAddresses(): Address[];
    getSingleAddress(AddyId: string): {
        id: string;
        name: string;
        phone: number;
        email: string;
        work: string;
    };
    deleteAddress(AddyId: string): void;
    updateAddress(AddyId: string, name: string, phone: number, email: string, work: string): void;
    private findAddress;
}
