import type { User } from "@prisma/client";
import type { CreateUserDTO, UpdateUserDTO } from "../../dtos/userDTOS.ts";

export interface ICreateUserUseCase {
  execute(user: CreateUserDTO): Promise<User | null>
}

export interface IGetAllUserUseCase {
  execute(): Promise<User[] | null>
}

export interface IGetUserByIdUseCase {
  execute(id: string): Promise<User | null>
}

export interface IUpdateUserUseCase {
  execute(user: UpdateUserDTO): Promise<User | null>
}
