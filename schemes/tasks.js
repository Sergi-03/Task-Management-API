import { z } from "zod";

const taskSchema = z.object({
  title: z.string().min(1, {message: "Title is required"}),
  description: z.string().optional(),
  completed: z.boolean().default(false),
  dueDate: z.string().datetime().or(z.date()).optional() ,
  category: z.string().optional()
});

  function validateTask(object) {
    return taskSchema.safeParse(object)
  };

  function validatePartialTask(object){
    return taskSchema.partial().safeParse(object)
  };

  export {validateTask, validatePartialTask}