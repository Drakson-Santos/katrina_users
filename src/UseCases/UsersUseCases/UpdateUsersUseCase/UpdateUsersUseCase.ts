import { Error } from "../../../entities/Error";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IUpdateUsersDTO } from "./UpdateUsersUseCaseDTO";

export class UpdateUsersUseCase {

    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async execute(dataUser: IUpdateUsersDTO): Promise<void> {
        if (!dataUser._id) throw new Error("User id is required", 400, "USER_ID_REQUIRED");
        
        const user = await this.usersRepository.findById(dataUser._id);
        if (!user) throw new Error("User not found", 404, "USER_NOT_FOUND");

        if (user.projects.length > 0) {
            const project_is_added = user.projects.find(project_id => project_id === dataUser.project_id);
            if (project_is_added) throw new Error("User is already added to this project", 400, "USER_ALREADY_ADDED_TO_PROJECT");
            else user.projects.push(dataUser.project_id);
        } else user.projects.push(dataUser.project_id);
        
        const user_update = await this.usersRepository.update(user);
        if (!user_update) throw new Error("User not updated", 400, "USER_NOT_UPDATED");
    }
}