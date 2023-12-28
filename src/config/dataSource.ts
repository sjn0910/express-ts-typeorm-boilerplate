import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import './env';

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const AppDataSource = new DataSource({
  type: 'mysql',
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [`${__dirname}/../entities/*.entity.ts`],
  namingStrategy: new SnakeNamingStrategy(),
  logging: true,
  synchronize: process.env.NODE_ENV === 'prod' ? false : true,
  migrations: [],
  subscribers: [],
});

export default AppDataSource;