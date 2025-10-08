import { Router } from "express";
import userRouter from "./userRoute.js";
import taskRouter from "./taskRoute.ts";

const routes = Router()

routes.use("/users", userRouter)
routes.use("/tasks", taskRouter)

export default routes;