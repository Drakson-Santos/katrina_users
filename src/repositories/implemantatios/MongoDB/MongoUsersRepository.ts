import mongoose from "../../../config/databases/mongoDataBase";
import { User } from "../../../entities/User";
import UserDB from "../../../schemas/user";
import { IUsersRepository } from "../../IUsersRepository";


export class MongoUsersRepositoriy implements IUsersRepository {
   
    public async idIsValid(id: string): Promise<Boolean> {
        if (mongoose.Types.ObjectId.isValid(id)){
            return true;
        }
        return false;
    }

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

    public async findAll(): Promise<User[]> {
        const users = await UserDB.find();
        return users;
    }

    public async findById(id: string): Promise<User> {
        if (this.idIsValid(id)) {
            const user = await UserDB.findById(id);
            return user;
        }
    }

    public async update(user: User): Promise<User | void> {
        if (this.idIsValid(user._id)) {
            const userUpdated = await UserDB.findByIdAndUpdate(user._id, user, { new: true });
            return userUpdated;
        }
    }

}