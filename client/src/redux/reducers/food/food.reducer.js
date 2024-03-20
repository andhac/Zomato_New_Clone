import {GET_FOOD,GET_FOOD_LIST} from "./food.type";

const initialState = {
    foodList: [],
}

const foodReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_FOOD_LIST:
            return{
                ...state,
                foodList: actiom.payload,
            };
        default:
            return {
                ...state,
            }

    }
}
export default foodReducer;