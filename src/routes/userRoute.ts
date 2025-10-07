import { Router } from "express";
import createUserController from "../container/user/createUserContainer.js";
import { validate } from "../middlewares/validate.ts";
import { createUserSchema } from "../schemas/userSchemas.ts";
import getAllUserController from "../container/user/getAllUserContainer.ts";
import getUserByIdController from "../container/user/getUserByIdContainer.ts";

const userRouter = Router();

userRouter.post('/create',
    validate(createUserSchema),
    (req, res) => createUserController.handle(req, res)
)

userRouter.get('/', (req, res) => getAllUserController.handle(req, res))

userRouter.get('/:id', (req, res) => getUserByIdController.handle(req, res))

export default userRouter;