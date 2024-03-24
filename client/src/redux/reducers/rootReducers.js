import { combineReducers } from "redux";

//reducers
import restaurant from "./restaurant/restaurant.reducer"
import image from "./image/image.reducer"
import review from "./review/review.reducer"
import user from './user/user.reducer'
import auth from "./auth/auth.reducer"
import food from "./food/food.reducer"
import cart from "./cart/cart.reducer"
const rootReducers = combineReducers({
    restaurant, image , review, user, auth, food, cart

})
export default rootReducers;