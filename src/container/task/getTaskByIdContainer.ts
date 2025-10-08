import { GetTaskByIdController } from "../../http/controllers/taskController.ts";
import { GetTaskByIdRepository } from "../../repositories/taskRepositories.ts";
import { GetTaskByIdUseCase } from "../../useCases/taskUseCases.ts";

const getTaskByIdRepository = new GetTaskByIdRepository()
const getTaskByIdUseCase = new GetTaskByIdUseCase(getTaskByIdRepository)
const getTaskByIdController = new GetTaskByIdController(getTaskByIdUseCase)

export default getTaskByIdController