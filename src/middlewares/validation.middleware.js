export function validationMiddleware(schema, property){
    return (req, res, next) => {
        const result = schema.validate(req[property]);
        if(result.error){
            const details = result.error.details.map(detail => detail.message).join(",");
            return res.status(400).json({error: details});
        }
        next();
    }
}
