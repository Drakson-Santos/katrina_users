import { Request, Response } from "express";
import { RegisterNewUserUseCase } from "./RegisterNewUseCase";

export class RegisterNewUserController {

    constructor(
        private registerNewUserUseCase: RegisterNewUserUseCase
    ) { }

    async execute(request: Request, response: Response): Promise<Response> {
        const { name, email, password, repeated_password } = request.body;
        try {
            const user = await this.registerNewUserUseCase.execute({
                name,
                email,
                password,
                repeated_password
            });
            return response.status(201).send(user)
        } catch (error) {
            return response.status(error.status || 500).json({
                message: error.message || 'Unexpected error.',
                type: error.type || 'UNEXPECTED_ERROR'
            })
        }
    }
}