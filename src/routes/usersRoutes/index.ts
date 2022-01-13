import { Request, Response } from "express";
import { _getUsersController } from "../../UseCases/UsersUseCases/GetUsersUseCase";
import { _registerNewUserController } from "../../UseCases/UsersUseCases/RegisterNewUserUseCase";
import { _updateUsersUseCaseController } from "../../UseCases/UsersUseCases/UpdateUsersUseCase";
import { BASE_PATH, PATH_CREATE } from "./paths";

const express = require('express');
const router = express.Router();

router.post(PATH_CREATE, async (req: Request, res: Response) => {
    return _registerNewUserController.execute(req, res);
});

router.get("", async (req: Request, res: Response) => {
    return _getUsersController.execute(req, res);
});


router.put("", async (req: Request, res: Response) => {
    return _updateUsersUseCaseController.execute(req, res);
});

module.exports = (app: any) => app.use(BASE_PATH, router);
