import { DeleteTaskController } from "../../http/controllers/taskController.ts"
import { DeleteTaskRepository } from "../../repositories/taskRepositories.ts"
import { DeleteTaskUseCase } from "../../useCases/taskUseCases.ts"

const deleteTaskRepository = new DeleteTaskRepository()
const deleteTaskUseCase = new DeleteTaskUseCase(deleteTaskRepository)
const deleteTaskController = new DeleteTaskController(deleteTaskUseCase)

export default deleteTaskController