import { UserService } from './user.service';
export declare class UserController {
    private userservice;
    constructor(userservice: UserService);
    addUser(username: string, email: string): import("./user.model").User;
    getAllUsers(): import("./user.model").User[];
    deleteAddress(id: string): any;
    updateAddress(id: string, userName: string, email: string): string;
}
