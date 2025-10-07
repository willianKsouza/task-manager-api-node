import { GetAllUserController } from "../../http/controllers/UserController.ts";
import { GetAllUserRepository } from "../../repositories/userRepositories.ts";
import { GetAllUserUseCase } from "../../useCases/userUseCases.ts";


const getAllUserRepository = new GetAllUserRepository();
const getAllUserUseCase = new GetAllUserUseCase(getAllUserRepository);
const getAllUserController = new GetAllUserController(getAllUserUseCase);

export default getAllUserController

