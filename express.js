import express from "express";
import {taskRouter} from "./routes/task-routes.js";
import {corsMiddleWare} from "./cors/cors.js";
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const app = express();
const PORT = process.env.PORT ?? 1234;
export const prisma = new PrismaClient()

app.use(express.json())
app.use(corsMiddleWare());
app.use("/api/tasks", taskRouter)


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
