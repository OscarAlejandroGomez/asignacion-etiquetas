import express from 'express';
import morgan from 'morgan';
import findPointRouter from './controllers/findPoint.controller.js';
import { PORT } from './config/env.config.js';
import { getGeoJson } from './services/polygon.service.js';

const app = express();
const port = PORT || 3000;

global.GeoJson = await getGeoJson();

app.use(express.json());
app.use(morgan('short'));

app.use('/findLabel', findPointRouter );

app.use((err, req, res, next) => {
    if(err.Code){
        res.status(500).json({
            message: err.Code
        })
    }else{
        res.status(500).json({
            message: err
        })
    }
})

app.listen(port, ()=> console.log(`🚀 Server ready at http://localhost:${port}`));
