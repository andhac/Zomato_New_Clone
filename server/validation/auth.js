import joi from 'joi';

export const ValidateSignup = (userData) =>{
    const schema  =joi.object({
        fullName:joi.string().required().min(5).max(20),
        email:joi.string().email().required(),
        password:joi.string().min(5),
        address: joi.array().items(joi.object({detail:joi.string(),for:joi.string() })),
        phoneNumber:joi.number().min(10),

    })
    return schema.validateAsync(userData)
}

export const validateSignin = (userData) => {
    const schema = joi.object({
        email:joi.string().email().required(),
        password:joi.string().required(),
    })
    return schema.validateAsync(userData)
}