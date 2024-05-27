import Joi from "joi";

export const userValidators =
    Joi
        .object({
            username: Joi
                .string()
                .pattern(new RegExp('^[a-zA-Z]+$'))
                .required()
                .messages({
                    "string.pattern.base": "only words accepted",
                    "string.required.base": "username is required",
                }),
            password: Joi
                .string()
                .pattern(new RegExp('^[A-Za-z0-9]+$'))
                .min(6)
                .required()
                .messages({
                    "string.required.base": "Password muss unbedingt sein",
                    "string.pattern.base": "Password muss stark sein",
                    "string.min":"max 6 characters"
                }),
            age: Joi
                .number()
                .required()
                .min(1)
                .max(100)
                .messages({
                    "number.min": "min Age muss ab 1 sein (auf Deutsch)",
                    "number.max": "max Age muss bis 100 sein (auf Deutsch)",
                })

        })

