import { UpdateTaskController } from "../../http/controllers/taskController.ts"
import { UpdateTaskRepository } from "../../repositories/taskRepositories.ts"
import { UpdateTaskUseCase } from "../../useCases/taskUseCases.ts"

const updateTaskRepository = new UpdateTaskRepository()
const updateTaskUseCase = new UpdateTaskUseCase(updateTaskRepository)
const updateTaskController = new UpdateTaskController(updateTaskUseCase)

export default updateTaskController