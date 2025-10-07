import type { Request, Response, NextFunction } from "express";

export const validate = (schema: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            const errors = result.error.issues.map((e: any) => ({
                field: e.path.join("."),
                message: e.message
            }));
            return res.status(400).json({ errors });
        }
        req.body = result.data;
        next();
    };
};
