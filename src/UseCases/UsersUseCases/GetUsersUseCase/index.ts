import { MongoUsersRepositoriy } from "../../../repositories/implemantatios/MongoDB/MongoUsersRepository";
import { GetUsersUseCaseUseCase } from "./GetUsesUseCase";
import { GetUsersUseCaseController } from "./GetUsesController";

const _usersRepository = new MongoUsersRepositoriy();
const _getUsersUseCase = new GetUsersUseCaseUseCase(_usersRepository);
const _getUsersController = new GetUsersUseCaseController(_getUsersUseCase);

export { _getUsersController, _getUsersUseCase }