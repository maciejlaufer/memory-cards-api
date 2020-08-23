import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();
import typeormConfig from './config/typeorm.config';
import { createConnection } from 'typeorm';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes';

createConnection(typeormConfig)
  .then((connection) => {
    const app = express();

    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());

    app.use('/api', routes);

    app.listen(3000, () => {
      console.log('Server started on port 3000!');
    });
  })
  .catch((error) => console.log(error));
