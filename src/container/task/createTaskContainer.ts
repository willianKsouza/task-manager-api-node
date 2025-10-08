import { CreateTaskController } from "../../http/controllers/taskController.ts";
import { CreateTaskRepository } from "../../repositories/taskRepositories.ts";
import { GetUserByIdRepository } from "../../repositories/userRepositories.ts";
import { CreateTaskUseCase } from "../../useCases/taskUseCases.ts";


const createTaskRepository = new CreateTaskRepository();
const getUserByIdRepository = new GetUserByIdRepository();
const createTaskUseCase = new CreateTaskUseCase(createTaskRepository,getUserByIdRepository);
const createTaskController = new CreateTaskController(createTaskUseCase);

export default createTaskController