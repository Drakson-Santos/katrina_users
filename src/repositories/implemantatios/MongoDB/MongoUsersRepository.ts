import { User } from "../../../entities/User";
import UserDB from "../../../schemas/user";
import { IUsersRepository } from "../../IUsersRepository";


export class MongoUsersRepositoriy implements IUsersRepository {

    public async create(user: User): Promise<User> {
        return UserDB.create(user);
    }

    public async findByEmail(email: string, getPassword: boolean = false): Promise<User | undefined> {
        if (getPassword) {
            return UserDB.findOne({ email }).select('+password');
        } else {
            return UserDB.findOne({ email });
        }
    }

    // public async findAll(): Promise<Job[]> {
    //     const jobs = await Jobs.find();
    //     return jobs;
    // }

    // public async findById(id: string): Promise<Job> {
    //     if (mongoose.Types.ObjectId.isValid(id)){
    //         const job = await Jobs.findById(id);
    //         return job;
    //     }
    // }

    // public async update(job: Job): Promise<void> {
    //     await Jobs.findByIdAndUpdate(job.id, job);
    // }

    // public async delete(id: string): Promise<void> {
    //     await Jobs.findByIdAndDelete(id);
    // }

}