import type { User } from "@prisma/client";
import type { CreateUserDTO, UpdateUserDTO } from "../../dtos/userDTOS.ts";

export interface ICreateUserUseCase {
  execute(user: CreateUserDTO): Promise<Omit<User, 'password'> | null>
}

export interface IGetAllUserUseCase {
  execute(): Promise<Omit<User, 'password'>[] | null>
}

export interface IGetUserByIdUseCase {
  execute(id: string): Promise<Omit<User, 'password'> | null>
}

export interface IUpdateUserUseCase {
  execute(user: UpdateUserDTO): Promise<Omit<User, 'password'> | null>
}

export interface IDeleteUserUseCase {
  execute(id: string): Promise<Omit<User, 'password'> | null>
}
