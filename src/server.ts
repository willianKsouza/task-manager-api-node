import express from "express";
import routes from "./routes/routes.js";
import { globalErrorHandler } from "./middlewares/globalErrorHandler.ts";

const app = express();

app.use(express.json());

app.use(routes)

app.use(globalErrorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
