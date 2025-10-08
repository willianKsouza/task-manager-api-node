import { UpdateUserController } from "../../http/controllers/UserController.ts";
import { UpdateUserRepository } from "../../repositories/userRepositories.ts";
import { UpdateUserUseCase } from "../../useCases/userUseCases.ts";

const updateUserRepository = new UpdateUserRepository();
const updateUserUseCase = new UpdateUserUseCase(updateUserRepository);
const updateUserController = new UpdateUserController(updateUserUseCase);

export default updateUserController