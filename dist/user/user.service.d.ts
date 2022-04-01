import { User } from './user.model';
export declare class UserService {
    private user;
    insertUser(username: string, email: string): User;
    getUser(): User[];
    deleteUser(id: string): void;
    updateUser(userid: string, username: string, email: string): void;
    private findUser;
}
