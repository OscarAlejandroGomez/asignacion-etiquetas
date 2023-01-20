import Joi from "joi";

const getLabelRequest = Joi.object({
    latitud: Joi.number().required().options({ convert: true }),
    longitud: Joi.number().required().options({ convert: true }),
}).options({ allowUnknown: true });

export { getLabelRequest };