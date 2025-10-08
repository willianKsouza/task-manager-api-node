import type { User } from "@prisma/client";
import type { CreateUserDTO, UpdateUserDTO } from "../../dtos/userDTOS.ts";

export interface ICreateUserRepository {
    create(user: CreateUserDTO): Promise<Omit<User, 'password'> | null>
}

export interface IGetAllUserRepository {
    getAll(): Promise<Omit<User, 'password'>[] | null>
}

export interface IGetUserByIdRepository {
    getById(id: string): Promise<Omit<User, 'password'> | null>
}

export interface IUpdateUserRepository {
    update(user: UpdateUserDTO): Promise<Omit<User, 'password'> | null>
}

export interface IDeleteUserRepository {
    delete(id: string): Promise<Omit<User, 'password'> | null>
}