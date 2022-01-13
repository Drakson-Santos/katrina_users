import { Request, Response } from "express";
import { GetUsersUseCaseUseCase } from "./RegisterNewUseCase";

export class GetUsersUseCaseController {

    constructor(
        private getUsersUseCase: GetUsersUseCaseUseCase
    ) { }

    async execute(request: Request, response: Response): Promise<Response> {
        const { id, email } = request.query;
        try {
            const users = await this.getUsersUseCase.execute({
                id: id ? String(id) : undefined,
                email: email ? String(email) : undefined
            });
            return response.status(200).send(users)
        } catch (error) {
            return response.status(error.status || 500).json({
                message: error.message || 'Unexpected error.',
                type: error.type || 'UNEXPECTED_ERROR'
            })
        }
    }
}