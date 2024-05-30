import Joi, {string} from "joi";
export const postValidators =
    Joi
        .object({
            title: Joi.string() .required() .messages({'string.required': 'title name cannot be empty'}),
            body: Joi.string() .required() .messages({'string.required':'body name cannot be empty'}),
            userId: Joi.number() .min(1) .max(10) .required() .messages({
                'number.required': 'userId cannot be empty',
                'number.min': 'userId cannot be lt1',
                'number.max': 'userId cannot be gt10'
            }
            )
        })