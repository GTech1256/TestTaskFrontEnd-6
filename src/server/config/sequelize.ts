import { Sequelize } from 'sequelize-typescript';
import * as sequelizeOptions from './sequelizeOptions.json';

type SequelizeOptions = Record<string, {
  username: string,
  password: string,
  database: string,
  host: string,
  port: string,
  dialect: 'postgres',
}>

const currentOptions = (sequelizeOptions as SequelizeOptions)[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize({
  username: currentOptions.username,
  password: currentOptions.password,
  database: currentOptions.database,
  host: currentOptions.host,
  port: parseInt(currentOptions.port, 10),
  dialect: currentOptions.dialect,
  // models: [__dirname + '/src/server/models/*.ts']
});

export default sequelize;
