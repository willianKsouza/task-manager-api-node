import type { Task } from "@prisma/client";
import type { CreateTaskDTO, UpdateTaskDTO } from "../../dtos/taskDTOS.ts";
import type { UpdateUserDTO } from "../../dtos/userDTOS.ts";

export interface ICreateTaskUseCase {
  execute(task: CreateTaskDTO): Promise<Task | null>
}

export interface IGetAllTaskUseCase {
  execute(): Promise<Task[] | null>
}

export interface IGetTaskByIdUseCase {
  execute(id: string): Promise<Task | null>
}

export interface IUpdateTaskUseCase {
  execute(Task: UpdateTaskDTO): Promise<Task | null>
}

export interface IDeleteTaskUseCase {
  execute(id: string): Promise<Task | null>
}