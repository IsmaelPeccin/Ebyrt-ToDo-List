import { INTEGER, Model, STRING, DATE } from 'sequelize';
import db from '.';
import User from './UsersModel';

class Tasks extends Model {
  public id!: number;

  public title!: string;

  public task!: string;

  public status!: string;

  public userId!: number;

  public createdAt!: Date;

  public updatedAt!: Date;
}

Tasks.init({
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: STRING,
    allowNull: false,
  },
  task: {
    type: STRING,
    allowNull: false,
  },
  status: {
    type: STRING,
    allowNull: false,
  },
  userId: {
    type: INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DATE,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'tasks',
  timestamps: true,
});

Tasks.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export default Tasks;
