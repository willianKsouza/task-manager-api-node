import { GetAllTaskController } from "../../http/controllers/taskController.ts";
import { GetAllTaskRepository } from "../../repositories/taskRepositories.ts";
import { GetAllTaskUseCase } from "../../useCases/taskUseCases.ts";



const getAllTaskRepository = new GetAllTaskRepository();
const getAllTaskUseCase = new GetAllTaskUseCase(getAllTaskRepository);
const getAllTaskController = new GetAllTaskController(getAllTaskUseCase);


export default getAllTaskController