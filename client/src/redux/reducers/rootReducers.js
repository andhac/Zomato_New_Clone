import { combineReducers } from "redux";

//reducers
import restaurant from "./restaurant/restaurant.reducer"
import image from "./image/image.reducer"
import review from "./review/review.reducer"
const rootReducers = combineReducers({
    restaurant, image , review

})
export default rootReducers;