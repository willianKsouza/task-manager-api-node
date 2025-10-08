import type { Task } from "@prisma/client";
import type { CreateTaskDTO, UpdateTaskDTO } from "../dtos/taskDTOS.ts";
import type { ICreateTaskUseCase, IDeleteTaskUseCase, IGetAllTaskUseCase, IGetTaskByIdUseCase, IUpdateTaskUseCase } from "../interfaces/task/ITaskUseCase.ts";
import type { ICreateTaskRepository, IDeleteTaskRepository, IGetAllTaskRepository, IGetTaskByIdRepository, IUpdateTaskRepository } from "../interfaces/task/ITaskRepositories.ts";
import type { IGetUserByIdRepository } from "../interfaces/user/IUserRepositories.ts";

export class CreateTaskUseCase implements ICreateTaskUseCase {
    constructor(private createTaskRepository: ICreateTaskRepository,
        private getUserByIdRepository: IGetUserByIdRepository
    ) { }

    async execute(param: CreateTaskDTO): Promise<Task | null> {
        const user = await this.getUserByIdRepository.getById(param.userId)
        if (!user) {
            return null
        }
        const task = await this.createTaskRepository.create(param)
        return task
    }
}

export class GetAllTaskUseCase implements IGetAllTaskUseCase {
    constructor(private getAllTaskRepository: IGetAllTaskRepository) { }

    async execute(): Promise<Task[] | null> {
        const task = await this.getAllTaskRepository.getAll()
        return task
    }
}

export class GetTaskByIdUseCase implements IGetTaskByIdUseCase {
    constructor(private getTaskByIdRepository: IGetTaskByIdRepository) { }

    async execute(id: string): Promise<Task | null> {
        const task = await this.getTaskByIdRepository.getById(id)
        return task
    }
}

export class UpdateTaskUseCase implements IUpdateTaskUseCase {
    constructor(private updateTaskRepository: IUpdateTaskRepository) { }
    execute(task: UpdateTaskDTO): Promise<Task | null> {
        const taskUpdated = this.updateTaskRepository.update(task)
        return taskUpdated
    }
}

export class DeleteTaskUseCase implements IDeleteTaskUseCase {
    constructor(private deleteTaskRepository: IDeleteTaskRepository) { }
    execute(id: string): Promise<Task | null> {
        const task = this.deleteTaskRepository.delete(id)
        return task
    }
}