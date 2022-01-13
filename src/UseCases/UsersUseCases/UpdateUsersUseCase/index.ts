import { MongoUsersRepositoriy } from "../../../repositories/implemantatios/MongoDB/MongoUsersRepository";
import { UpdateUsersUseCase } from "./UpdateUsersUseCase";
import { UpdateUsersUseCaseController } from "./UpdateUsersUseCaseController";


const _usersRepository = new MongoUsersRepositoriy();
const _updateUsersUseCase= new UpdateUsersUseCase(_usersRepository);
const _updateUsersUseCaseController = new UpdateUsersUseCaseController(_updateUsersUseCase);

export { _updateUsersUseCaseController, _updateUsersUseCase }