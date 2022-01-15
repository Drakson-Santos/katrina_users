import { KatrinaProjectsController } from "../../../controllers/katrinaProjectsControllers/KatrinaProjectsController";
import { Error } from "../../../entities/Error";
import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IGetUsersDTO } from "./GetUsesDTO";

export class GetUsersUseCaseUseCase {

    constructor(
        private usersRepository: IUsersRepository
    ) { }

    public async getAllProjects() {
        const katrinaProjectsController = new KatrinaProjectsController()
        const data_projects = await katrinaProjectsController.getProjects()
        return data_projects
    }

    public async setDataProjects(data_users: Array<any>) {
        let data = []
        const projects = await this.getAllProjects();
        data_users.forEach((user) => {
            let new_user = new User(user.toJSON())
            user.projects.forEach((project_id: string) => {
                const project = projects.find((project) => project._id === project_id)
                if (project) {
                    new_user.data_projects.push(project)
                }
            });
            data.push(new_user)
        });
        return data
    }

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

        result = await this.setDataProjects(result)
        return result
    }
}