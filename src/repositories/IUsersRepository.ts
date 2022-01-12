import { User } from "../entities/User";

export interface IUsersRepository {
    create(user: User): Promise<User>;
    findByEmail(email: string, getPassword?: boolean): Promise<User | undefined>;
    // findAll(): Promise<Job[]>;
    // findById(id: string): Promise<Job>;
    // update(job: Job): Promise<Job | void>;
    // delete(id: string): Promise<void>;
}