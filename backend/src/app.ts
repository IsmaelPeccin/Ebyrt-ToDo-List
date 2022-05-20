import * as express from 'express';
import TasksController from './api/controller/TasksController';
import { ITasksController, ITasksService } from './api/interfaces/tasks';
import errorMiddleware from './api/middlewares/errorMiddleware';
import TasksService from './api/service/TasksService';

class App {
  public app: express.Express;

  private _tasksController: ITasksController;

  private _tasksService: ITasksService;

  constructor() {
    this._tasksService = new TasksService();
    this._tasksController = new TasksController(this._tasksService);

    this.app = express();
    this.app.use(express.json());

    this.startConfigs();
  }

  private tasksRoutes(): void {
    this.app.get('/tasks', this._tasksController.getAllTasks);
    this.app.get('/tasks/:id', this._tasksController.getTaskById);
  }

  private startConfigs(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.tasksRoutes();
    this.app.use(errorMiddleware);
  }

  public start(PORT: number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

export const { app } = new App();
