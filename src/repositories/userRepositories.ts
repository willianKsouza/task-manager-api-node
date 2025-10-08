import type { User } from '@prisma/client';
import { prisma } from '../lib/prismaClient.ts'
import type { ICreateUserRepository, IDeleteUserRepository, IGetAllUserRepository, IGetUserByIdRepository, IUpdateUserRepository } from '../interfaces/user/IUserRepositories.ts';
import type { UpdateUserDTO } from '../dtos/userDTOS.ts';


export class CreateUserRepository implements ICreateUserRepository {
    async create(data: User): Promise<Omit<User, 'password'> | null> {
        const user = await prisma.user.create({
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
            },
            data: data
        })
        return user
    }
}

export class GetAllUserRepository implements IGetAllUserRepository {
    async getAll(): Promise<Omit<User, 'password'>[] | null> {
        const user = await prisma.user.findMany(
            {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    createdAt: true,
                },
            }
        )
        return user
    }
}

export class GetUserByIdRepository implements IGetUserByIdRepository {
    getById(id: string): Promise<Omit<User, 'password'> | null> {
        const user = prisma.user.findUnique({
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
            },
            where: {
                id
            }
        })
        return user
    }

}

export class UpdateUserRepository implements IUpdateUserRepository {
    async update(user: UpdateUserDTO): Promise<Omit<User, 'password'> | null> {

        const updatedUser = await prisma.user.update({
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
            },
            where: { id: user.id },
            data: user,
        });
        return updatedUser;
    }
}

export class DeleteUserRepository implements IDeleteUserRepository {
    async delete(id: string) {
        const user = await prisma.user.delete({
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
            },
            where: {
                id
            }
        })
        return user
    }
}