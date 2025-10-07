import { GetUserByIdController } from "../../http/controllers/UserController.ts";
import { GetUserByIdRepository } from "../../repositories/userRepositories.ts";
import { GetUserByIdUseCase } from "../../useCases/userUseCases.ts";

const getUserByIdRepository = new GetUserByIdRepository();
const getUserByIdUseCase = new GetUserByIdUseCase(getUserByIdRepository);
const getUserByIdController = new GetUserByIdController(getUserByIdUseCase);

export default getUserByIdController
