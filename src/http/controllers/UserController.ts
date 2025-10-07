import type { Request, Response } from "express";
import type { CreateUserUseCase, GetAllUserUseCase, GetUserByIdUseCase } from "../../useCases/userUseCases.ts"

export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body

        const user = await this.createUserUseCase.execute({
            name,
            email,
            password
        })

        return res.status(201).json({
            data: user?.id
        })
    }

}

export class GetAllUserController {
    constructor(private getAllUserUseCase: GetAllUserUseCase) { }

    async handle(req: Request, res: Response) {

        const user = await this.getAllUserUseCase.execute()

        return res.status(200).json({
            data: user
        })
    }

}

export class GetUserByIdController {
    constructor(private getUserByIdUseCase: GetUserByIdUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({ message: "informe um id" });
        }

        const user = await this.getUserByIdUseCase.execute(id)

        return res.status(200).json({
            data: user
        })
    }

}