import { Router } from "express";
import createTaskController from "../container/task/createTaskContainer.ts";
import { validate } from "../middlewares/validate.ts";
import { createTaskSchema } from "../schemas/taskSchemas.ts";
import getAllTaskController from "../container/task/getAllTaskContainer.ts";
import getTaskByIdController from "../container/task/getTaskByIdContainer.ts";
import updateTaskController from "../container/task/updateTaskContainer.ts";
import deleteTaskController from "../container/task/deleteTaskContainer.ts";

const taskRouter = Router();

taskRouter.post('/',
    validate(createTaskSchema),
    (req, res) => createTaskController.handle(req, res))

taskRouter.get('/', (req, res) => getAllTaskController.handle(req, res))

taskRouter.get('/:id', (req, res) => getTaskByIdController.handle(req, res))

taskRouter.put('/:id', (req, res) => updateTaskController.handle(req, res))

taskRouter.delete('/:id', (req, res) => deleteTaskController.handle(req, res))



export default taskRouter