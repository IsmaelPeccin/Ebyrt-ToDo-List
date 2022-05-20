import Tasks from '../../database/model/TasksModel';
import { ITasks } from '../interfaces/tasks';

export default class TasksService {
  private _tasksModel;

  constructor() {
    this._tasksModel = Tasks;
  }

  public async getAllTasks(): Promise<ITasks[]> {
    return this._tasksModel.findAll();
  }

  public async getTaskById(id: number): Promise<ITasks | null> {
    return this._tasksModel.findByPk(id);
  }

  public async createTask(dataTask: ITasks): Promise<ITasks> {
    const newTask = await this._tasksModel.create({
      title: dataTask.title,
      task: dataTask.task,
      status: dataTask.status,
    });
    return newTask;
  }

  public async deleteTask(id: number): Promise<boolean | void> {
    const task = await this._tasksModel.findByPk(id);
    if (!task) {
      return false;
    }
    await this._tasksModel.destroy({
      where: {
        id,
      },
    });
    return true;
  }
}
