import cookieParser from 'cookie-parser';
import express from 'express';
import 'reflect-metadata';
import './config/env';

const PORT = Number(process.env.PORT) || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.listen(PORT, () => console.log(`Server is started!`));
