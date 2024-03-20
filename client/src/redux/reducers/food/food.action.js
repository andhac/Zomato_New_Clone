import axios from "axios";

import{GET_FOOD_LIST, GET_FOOD} from "./food.type";

export const getFood = (foodID) => async (dispatch) => {
    try{
        const Food = await axios({
            method: "GET",
            url: `http://localhost:4000/food/${foodID}`
        })
        return dispatch({
            type: GET_FOOD,
            payload: Food.data
        })
    } catch (err){
        return dispatch({
            type:"ERROR",
            payload: err
        })
    }
}

export const getFoodList = (menuID) => async (dispatch) => {
    try{
        const Menu = await axios({
            method: "GET",
            url: `http://localhost:4000/menu/list/${menuID}`
        })
        return dispatch({
            type: GET_FOOD_LIST,
            payload: Menu.data
        })
    } catch (err){
        return dispatch({
            type:"ERROR",
            payload: err
        })
    }
}