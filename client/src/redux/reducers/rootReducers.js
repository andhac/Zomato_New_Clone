import { combineReducers } from "redux";

//reducers
import restaurant from "./restaurant/restaurant.reducer"

const rootReducers = combineReducers({
    restaurant
})
export default rootReducers;