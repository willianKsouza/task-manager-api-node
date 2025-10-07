import type { User } from '@prisma/client';
import { prisma } from '../lib/prismaClient.ts'
import type { ICreateUserRepository, IGetAllUserRepository, IGetUserByIdRepository, IUpdateUserRepository } from '../interfaces/user/IUserRepositories.ts';
import type { UpdateUserDTO } from '../dtos/userDTOS.ts';


export class CreateUserRepository implements ICreateUserRepository {
    async create(data: User): Promise<User | null> {
        const user = await prisma.user.create({
            data: data
        })
        return user
    }
}

export class GetAllUserRepository implements IGetAllUserRepository {
    async getAll(): Promise<User[] | null> {
        const user = await prisma.user.findMany()
        return user
    }
}

export class GetUserByIdRepository implements IGetUserByIdRepository {
    getById(id: string): Promise<User | null> {
        const user = prisma.user.findUnique({
            where: {
                id
            }
        })
        return user
    }

}

export class UpdateUserRepository implements IUpdateUserRepository {
    async update(user: UpdateUserDTO): Promise<User | null> {

        const updatedUser = await prisma.user.update({
            where: { id: user.id },
            data:user,
        });
        return updatedUser;
    }
}



