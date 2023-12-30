import express from 'express';
import 'reflect-metadata';
import AppDataSource from './config/dataSource';
import './config/env';
import errorHandler from './util/errorHandler';

const PORT = Number(process.env.PORT) || 3000;

const app = express();

AppDataSource.initialize().then(() => console.log('DATABASE is connected!'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is started!`));
