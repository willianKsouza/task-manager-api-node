import type { User } from "@prisma/client"
import type { ICreateUserUseCase, IDeleteUserUseCase, IGetAllUserUseCase, IGetUserByIdUseCase, IUpdateUserUseCase } from "../interfaces/user/IUserUseCases.ts"
import bcrypt from 'bcrypt';
import type { CreateUserDTO, UpdateUserDTO } from "../dtos/userDTOS.ts"
import type { ICreateUserRepository, IDeleteUserRepository, IGetAllUserRepository, IGetUserByIdRepository, IUpdateUserRepository } from "../interfaces/user/IUserRepositories.ts"


export class CreateUserUseCase implements ICreateUserUseCase {
    constructor(private createUserRepository: ICreateUserRepository) { }

    async execute(param: CreateUserDTO): Promise<Omit<User, 'password'> | null> {
        const saltRounds = 10;

        const hashedPassword = await bcrypt.hash(param.password, saltRounds);

        const userData = {
            ...param,
            password: hashedPassword,
        };

        const user = await this.createUserRepository.create(userData)

        return user
    }
}

export class GetAllUserUseCase implements IGetAllUserUseCase {
    constructor(private getAllUserRepository: IGetAllUserRepository) { }

    async execute(): Promise<Omit<User, 'password'>[] | null> {
        const user = await this.getAllUserRepository.getAll()
        return user
    }
}

export class GetUserByIdUseCase implements IGetUserByIdUseCase {
    constructor(private getUserByIdRepository: IGetUserByIdRepository) { }

    async execute(id: string): Promise<Omit<User, 'password'> | null> {
        const user = await this.getUserByIdRepository.getById(id)
        return user
    }
}

export class UpdateUserUseCase implements IUpdateUserUseCase {
    constructor(private updateUserRepository: IUpdateUserRepository) { }
    execute(user: UpdateUserDTO): Promise<Omit<User, 'password'> | null> {
        const userUpdated = this.updateUserRepository.update(user)
        return userUpdated
    }
}

export class DeleteUserUseCase implements IDeleteUserUseCase {
    constructor(private deleteUserRepository: IDeleteUserRepository) { }
    execute(id: string): Promise<Omit<User, 'password'> | null> {
        const user = this.deleteUserRepository.delete(id)
        return user
    }
}
