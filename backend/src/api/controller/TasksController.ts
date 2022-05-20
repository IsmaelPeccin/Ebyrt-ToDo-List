import { Response, Request, NextFunction } from 'express';
import { ITasksService } from '../interfaces/tasks';

export default class TasksController {
  constructor(private tasksService: ITasksService) {}

  getAllTasks = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  )
  : Promise<void | Response> => {
    try {
      const tasks = await this.tasksService.getAllTasks();
      return res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  };

  getTaskById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  )
  : Promise<void | Response> => {
    try {
      const { id } = req.params;
      const task = await this.tasksService.getTaskById(+id);
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      return res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  };
}
