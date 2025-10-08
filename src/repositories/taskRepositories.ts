import type { Task } from '@prisma/client'
import type { ICreateTaskRepository, IDeleteTaskRepository, IGetAllTaskRepository, IGetTaskByIdRepository, IUpdateTaskRepository } from '../interfaces/task/ITaskRepositories.ts'
import { prisma } from '../lib/prismaClient.ts'
import type { CreateTaskDTO, UpdateTaskDTO } from '../dtos/taskDTOS.ts'

export class CreateTaskRepository implements ICreateTaskRepository {
      async create(data: CreateTaskDTO): Promise<Task | null> {
        const task = await prisma.task.create({
            data: data
        });
        return task;
    }
}

export class GetAllTaskRepository implements IGetAllTaskRepository {
    async getAll(): Promise<Task[] | null> {
        const task = await prisma.task.findMany()
        return task
    }
}

export class GetTaskByIdRepository implements IGetTaskByIdRepository {
    getById(id: string): Promise<Task | null> {
        const task = prisma.task.findUnique({
            where: {
                id
            }
        })
        return task
    }

}

export class UpdateTaskRepository implements IUpdateTaskRepository {
    async update(task: UpdateTaskDTO): Promise<Task | null> {

        const updatedTask = await prisma.task.update({
            where: { id: task.id},
            data: task,
        });
        return updatedTask;
    }
}

export class DeleteTaskRepository implements IDeleteTaskRepository {
    async delete(id: string): Promise<Task | null> {
        const task = await prisma.task.delete({
            where: {
                id
            }
        })
        return task
    }
}