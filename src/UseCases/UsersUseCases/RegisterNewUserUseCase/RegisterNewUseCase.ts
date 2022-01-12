import { Error } from "../../../entities/Error";
import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IDatarRegisterUser } from "./RegisterNewUserDTO";

export class RegisterNewUserUseCase {

    constructor(
        private usersRepository: IUsersRepository
    ) { }

    private async validate(dataUser: IDatarRegisterUser): Promise<Error | undefined> {
        if (!dataUser.name) {
            return new Error("Name is required", 400, "VALUE_REQUIRED");
        } else if (!dataUser.email) {
            return new Error("Email is required", 400, "VALUE_REQUIRED");
        } else if (!dataUser.password) {
            return new Error("Password is required", 400, "VALUE_REQUIRED");
        } else if (dataUser.password.length < 6) {
            return new Error('Password must be at least 6 characters.', 400, 'PASSWORD_TOO_SHORT');
        } else if (!dataUser.repeated_password) {
            return new Error("Repeated password is required", 400, "VALUE_REQUIRED");
        } else if (dataUser.password !== dataUser.repeated_password) {
            return new Error("Passwords do not match", 400, "PASSWORDS_DO_NOT_MATCH");
        }

        if (await this.usersRepository.findByEmail(dataUser.email)) {
            return new Error('Email already in use.', 400, 'EMAIL_ALREADY_IN_USE');
        }
    }

    async execute(dataUser: IDatarRegisterUser) {
        const error = await this.validate(dataUser);
        if (error) throw error;

        let user = new User(dataUser);
        await this.usersRepository.create(user);
    }
}