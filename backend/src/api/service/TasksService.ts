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
}
