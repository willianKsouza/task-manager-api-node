import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.email(),
  password: z.string().min(4, "Senha deve ter pelo menos 4 caracteres")
});

export const updateUserSchema = createUserSchema.partial();
