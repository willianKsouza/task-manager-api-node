import type { Request, Response } from "express";
import type { CreateTaskUseCase, DeleteTaskUseCase, GetAllTaskUseCase, GetTaskByIdUseCase, UpdateTaskUseCase } from "../../useCases/taskUseCases.ts"

export class CreateTaskController {
    constructor(private createTaskUseCase: CreateTaskUseCase) { }

    async handle(req: Request, res: Response) {
        const { title, description, status, userId } = req.body
        const task = await this.createTaskUseCase.execute({
            title,
            description,
            status,
            userId
        })

        return res.status(201).json({
            data: task?.id
        })
    }
}

export class GetAllTaskController {
    constructor(private getAllTaskUseCase: GetAllTaskUseCase) { }

    async handle(req: Request, res: Response) {

        const task = await this.getAllTaskUseCase.execute()

        return res.status(200).json({
            data: task
        })
    }

}

export class GetTaskByIdController {
    constructor(private getTaskByIdUseCase: GetTaskByIdUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({ message: "informe um id" });
        }

        const task = await this.getTaskByIdUseCase.execute(id)

        return res.status(200).json({
            data: task
        })
    }

}

export class UpdateTaskController {
    constructor(private updateTaskUseCase: UpdateTaskUseCase) { }
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { title, description, status } = req.body
        if (!id) {
            return res.status(400).json({ message: "informe um id" });
        }
        const task = await this.updateTaskUseCase.execute({
            id,
            title,
            description,
            status,
        })

        return res.status(200).json({
            data: task
        })
    }
}


export class DeleteTaskController {
    constructor(private deleteTaskUseCase: DeleteTaskUseCase) { }
    async handle(req: Request, res: Response) {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({ message: "informe um id" });
        }

        await this.deleteTaskUseCase.execute(id)

        return res.status(200).json()
    }
}