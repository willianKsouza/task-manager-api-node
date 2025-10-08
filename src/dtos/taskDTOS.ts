import { Status } from "@prisma/client";

export type CreateTaskDTO = {
    title: string;
    description: string;
    status: Status;
    userId: string;
}

export type UpdateTaskDTO = {
    id: string;
    title?: string;
    description?: string;
    status?: Status;
}