import type { NextFunction, Request, Response } from "express";
import { Prisma } from "@prisma/client";

interface ErrorResponse {
    statusCode: number;
    message: string;
    details?: any;
}

export const globalErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    let errorResponse: ErrorResponse = {
        statusCode: 500,
        message: "Ocorreu um erro interno no servidor.",
    };

    if (err instanceof Prisma.PrismaClientKnownRequestError) {

        if (err.code === 'P2002') {
            const target = (err.meta?.target as string[])?.join(', ');


            if (target?.includes('email')) {
                errorResponse = {
                    statusCode: 409,
                    message: "Este e-mail já está em uso. Por favor, utilize outro.",
                };
            } else {
                errorResponse = {
                    statusCode: 409,
                    message: `O valor fornecido para '${target}' já existe.`,
                };
            }
        }
        else {
            errorResponse = {
                statusCode: 400,
                message: "Ocorreu um erro com sua solicitação.",
                details: { code: err.code }
            };
        }
    }
    else if (err instanceof Prisma.PrismaClientValidationError) {
        errorResponse = {
            statusCode: 400,
            message: "Dados inválidos. Verifique os campos enviados.",
            details: err.message.split('\n').slice(-1)[0]
        };
    }
    else if (err.statusCode) {
        errorResponse = {
            statusCode: err.statusCode,
            message: err.message,
            details: err.details,
        };
    }

    res.status(errorResponse.statusCode).json(errorResponse);
};
