import axios from "axios";

//Redux Type
import {GET_RESTAURANT, GET_SPECIFIC_RESTAURANT} from "./restaurant.type";

export const getRestaurant = () => async(dispatch) => {
    try{
        const restaurantList = await axios({
            method: "GET",
            url: "http://localhost:4000/restaurant/?city=Agra",
        })
        return dispatch({
            type: GET_RESTAURANT,
            payload: restaurantList.data
        })
    }catch (err) {
        return dispatch({
            type: "ERROR",
            payload:err.message
        })
    }
}

export const getSpecificRestaurant = (_id) => async(dispatch) => {
    try{
        const restaurant = await axios({
            method:"GET",
            url:`http://localhost:4000/restaurant/${_id}`
        })

        return dispatch({
            type:GET_SPECIFIC_RESTAURANT,
            payload:restaurant.data
        })
    }catch (err){
        return dispatch({
            type: "ERROR",
            payload:err
        })
    }
}