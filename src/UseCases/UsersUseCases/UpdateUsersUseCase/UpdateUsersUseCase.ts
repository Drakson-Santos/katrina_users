import { Error } from "../../../entities/Error";
import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IUpdateUsersDTO } from "./UpdateUsersUseCaseDTO";

export class UpdateUsersUseCase {

    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async execute(dataUser: IUpdateUsersDTO): Promise<void> {
        if (!dataUser._id) throw new Error("User id is required", 400, "USER_ID_REQUIRED");
        const user = new User(dataUser);
        await this.usersRepository.update(user);
    }
}