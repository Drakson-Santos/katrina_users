import { Request, Response } from "express";
import { UpdateUsersUseCase } from "./UpdateUsersUseCase";

export class UpdateUsersUseCaseController {

    constructor(
        private updateUsersUseCase: UpdateUsersUseCase
    ) { }

    async execute(request: Request, response: Response): Promise<Response> {
        const { id } = request.query;
        const { name, email, password, project_id } = request.body;
        try {
            const user = await this.updateUsersUseCase.execute({
                _id: id ? String(id) : "",
                name,
                email,
                password,
                project_id,
            });
            return response.status(200).send(user)
        } catch (error) {
            return response.status(error.status || 500).json({
                message: error.message || 'Unexpected error.',
                type: error.type || 'UNEXPECTED_ERROR'
            })
        }
    }
}