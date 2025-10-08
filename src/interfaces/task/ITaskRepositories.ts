import type { Task } from "@prisma/client";
import type { CreateTaskDTO, UpdateTaskDTO } from "../../dtos/taskDTOS.ts";

export interface ICreateTaskRepository {
    create(task: CreateTaskDTO): Promise<Task | null>
}

export interface IGetAllTaskRepository {
    getAll(): Promise<Task[] | null>
}

export interface IGetTaskByIdRepository {
    getById(id: string): Promise<Task | null>
}

export interface IUpdateTaskRepository {
    update(Task: UpdateTaskDTO): Promise<Task | null>
}

export interface IDeleteTaskRepository {
    delete(id: string): Promise<Task | null>
}