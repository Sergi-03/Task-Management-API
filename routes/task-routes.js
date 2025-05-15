import {Router} from "express";
import {validateTask, validatePartialTask} from "../schemes/tasks.js";
import {prisma} from "../express.js";
const taskRouter = Router();

taskRouter.get("/", async (req, res, next) => {
try {
  const tasks = await prisma.task.findMany()
  res.json(tasks)
} catch (error) {
  next(error)
}
})

taskRouter.get("/:id", async (req, res, next) => {
try {
const {id} = req.params
const task = await prisma.task.findUnique({
  where: {
    id: Number(id)
  }
})
if(!task){
  return res.status(404).json({error: "Task not found"})
}
res.json(task)
} catch (error) {
  next(error)
}
})

taskRouter.post("/", async (req, res, next) => {
try {
  const result = validateTask(req.body)
  const newTask = await prisma.task.create({
    data: {
    ...result.data
    }
  })
  res.status(201).json(newTask)
} catch (error) {
  next(error)
}
})

taskRouter.patch("/:id", async (req, res, next) => {
try {
  const {id} = req.params
  const result = validatePartialTask(req.body)
  const updateTask = await prisma.task.update({
    where: {
      id: Number(id),
    },
    data: {
      ...result.data
    }
  })
  res.json(updateTask)
} catch (error) {
  next(error)
}
})

taskRouter.delete("/:id", async (req, res, next) => {
try {
  const {id} = req.params
  const deleteTask = await prisma.task.delete({
    where: {
      id: Number(id)
    }
  })
  if(!deleteTask){
    return res.status(404).json({error: "Task to delete not found"})
  }
} catch (error) {
  next(error)
}
})

export {taskRouter}