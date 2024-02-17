import joi, {isSchema} from 'joi'

export const  validateCity = (restaurantObject) =>{
    const schema  = joi.object({
        city:joi.string().required()
    })
    return schema.validateAsync(restaurantObject)
}

export const validateRestaurantSearchString = (response) =>{
    const schema  = joi.object({
        searchString: joi.string().required(),
    })
    return schema.validateAsync(response)
}