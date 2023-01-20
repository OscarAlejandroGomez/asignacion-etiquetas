import * as dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import findPointRouter from './controllers/findPoint.controller.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

app.use('/findLabel', findPointRouter );


app.listen(port, ()=> console.log(`🚀 Server ready at http://localhost:${port}`));

