import { Response, Request, NextFunction } from 'express';

export interface ITasks {
  id: number;
  title: string;
  task: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITasksService {
  getAllTasks(): Promise<ITasks[]>;
  getTaskById(id: number): Promise<ITasks | null>;
}

export interface ITasksController {
  getAllTasks(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void | Response>;
  getTaskById(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void | Response>;
}
