import { User } from "../entities/User";

export interface IUsersRepository {
    create(user: User): Promise<User>;
    findByEmail(email: string, getPassword?: boolean): Promise<User | undefined>;
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User>;
    update(user: User): Promise<User | void>;
    // delete(id: string): Promise<void>;
}