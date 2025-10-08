import { Router } from "express";
import createUserController from "../container/user/createUserContainer.js";
import { validate } from "../middlewares/validate.ts";
import { createUserSchema } from "../schemas/userSchemas.ts";
import getAllUserController from "../container/user/getAllUserContainer.ts";
import getUserByIdController from "../container/user/getUserByIdContainer.ts";
import updateUserController from "../container/user/updateUserContainer.ts";
import deleteUserController from "../container/user/deleteUserContainer.ts";

const userRouter = Router();

userRouter.post('/',
    validate(createUserSchema),
    (req, res) => createUserController.handle(req, res)
)

userRouter.get('/', (req, res) => getAllUserController.handle(req, res))

userRouter.get('/:id', (req, res) => getUserByIdController.handle(req, res))

userRouter.put('/:id', (req, res) => updateUserController.handle(req, res))

userRouter.delete('/:id', (req, res) => deleteUserController.handle(req, res))

export default userRouter;