import Joi from "joi";

let carValidators = Joi.object({
    model: Joi.string().min(2).max(20).required().messages({
        "string.empty": "model не може бути пустим",
        "string.min": "model має бути не менше 2 символів"
    }),
    price: Joi.number().min(0).max(100000000).required(),
    year: Joi.number().min(1970).max(new Date().getFullYear()).required()
});

export {carValidators}
