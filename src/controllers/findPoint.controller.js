import Router from 'express';
import { validationMiddleware } from '../middlewares/validation.middleware.js';
import { getLabelRequest } from '../models/getLabelRequest.model.js';
import { findLabel } from '../services/findCoordinate.service.js';

const router = Router();

router.get('/', validationMiddleware(getLabelRequest, "query") , async(req, res, next) => {
    try{
        const { latitud, longitud } = req.query;
        const label = await findLabel({ latitud, longitud });
        if(label){
            res.status(200).json({...req.query, label: label});
        }else{
            res.status(200).json({...req.query, label: "No encontrado"});
        }
        
    }catch(err){
        next(err);
    }

});

export default router;