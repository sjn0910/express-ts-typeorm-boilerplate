import express from 'express';
import 'reflect-metadata';
import AppDataSource from './config/dataSource';
import './config/env';

const PORT = Number(process.env.PORT) || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

AppDataSource.initialize().then(() => console.log('DATABASE is connected!'));

app.listen(PORT, () => console.log(`Server is started!`));
