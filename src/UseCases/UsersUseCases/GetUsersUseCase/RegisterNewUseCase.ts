import { Error } from "../../../entities/Error";
import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IGetUsersDTO } from "./RegisterNewUserDTO";

export class GetUsersUseCaseUseCase {

    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async execute(dataFilter: IGetUsersDTO) {
        let result = null
        if (dataFilter.id) {
            result = await this.usersRepository.findById(dataFilter.id);
        } else if (dataFilter.email) {
            result = await this.usersRepository.findByEmail(dataFilter.email);
        } else {
            result = await this.usersRepository.findAll();
        }

        if (!result) throw new Error ('No users found', 404, 'NO_USERS_FOUND');

        return result
    }
}