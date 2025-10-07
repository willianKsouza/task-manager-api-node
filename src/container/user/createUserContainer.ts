import { CreateUserController } from "../../http/controllers/UserController.ts";
import { CreateUserRepository } from "../../repositories/userRepositories.ts";
import { CreateUserUseCase } from "../../useCases/userUseCases.ts";

const createUserRepository = new CreateUserRepository();
const createUserUseCase = new CreateUserUseCase(createUserRepository);
const createUserController = new CreateUserController(createUserUseCase);

export default createUserController