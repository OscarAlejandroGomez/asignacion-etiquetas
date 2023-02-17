import Router from 'express';

const router = Router();

router.get('/' , async(req, res, next) => {
    try{
        res.sendStatus(200); 
    }catch(err){
        next(err);
    }
});

export default router;