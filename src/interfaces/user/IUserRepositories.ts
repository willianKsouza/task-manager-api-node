import type { User } from "@prisma/client";
import type { CreateUserDTO, UpdateUserDTO } from "../../dtos/userDTOS.ts";

export interface ICreateUserRepository {
    create(user: CreateUserDTO): Promise<User | null>
}

export interface IGetAllUserRepository {
    getAll(): Promise<User[] | null>
}

export interface IGetUserByIdRepository {
    getById(id: string): Promise<User | null>
}

export interface IUpdateUserRepository {
    update(user: UpdateUserDTO): Promise<User | null>
}