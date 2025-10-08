import { z } from "zod";
import { Status } from "@prisma/client";

export const createTaskSchema = z.object({
    title: z.string().min(3, "O título deve ter pelo menos 3 caracteres"),
    description: z.string().min(5, "A descrição deve ter pelo menos 5 caracteres"),
    status: z.enum(Status).optional(),
    userId: z.uuid("O ID do usuário deve ser um UUID válido")
});

export const updateTaskSchema = createTaskSchema.partial();