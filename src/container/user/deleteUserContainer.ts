import { DeleteUserController } from "../../http/controllers/UserController.ts";
import { DeleteUserRepository } from "../../repositories/userRepositories.ts";
import { DeleteUserUseCase } from "../../useCases/userUseCases.ts";

const deleteUserRepository = new DeleteUserRepository();
const deleteUserUseCase = new DeleteUserUseCase(deleteUserRepository);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

export default deleteUserController;