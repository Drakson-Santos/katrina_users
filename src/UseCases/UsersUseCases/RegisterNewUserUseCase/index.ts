import { MongoUsersRepositoriy } from "../../../repositories/implemantatios/MongoDB/MongoUsersRepository";
import { RegisterNewUserUseCase } from "./RegisterNewUseCase";
import { RegisterNewUserController } from "./RegisterNewUserController";

const _usersRepository = new MongoUsersRepositoriy();
const _registerNewUserUseCase = new RegisterNewUserUseCase(_usersRepository);
const _registerNewUserController = new RegisterNewUserController(_registerNewUserUseCase);

export { _registerNewUserController, _registerNewUserUseCase }