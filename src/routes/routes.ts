import { Router } from "express";
import userRouter from "./userRoute.js";

const routes = Router()

routes.use("/user", userRouter)

export default routes;