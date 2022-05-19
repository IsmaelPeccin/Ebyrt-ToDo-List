import { INTEGER, Model } from 'sequelize';
import db from '.';
import User from './UsersModel';
import Tasks from './TasksModel';

class UsersTasks extends Model {
  public userId!: number;

  public taskId!: number;
}

Tasks.init({
  userId: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  taskId: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'usersTasks',
  timestamps: true,
});

UsersTasks.belongsTo(User, { foreignKey: 'userId', as: 'user' });
UsersTasks.belongsTo(Tasks, { foreignKey: 'taskId', as: 'task' });

export default Tasks;
