import {GET_CART,
    ADD_TO_CART,
    DELETE_FROM_CART,
    INCREMENT_CART,
    DECREMENT_CART,
    UPDATE_CART
} from "./cart.type";

const initialState = {
    cart: []
}
const CartReducer = (state =initialState ,action) => {
    switch (action.type){
        case ADD_TO_CART:
            return{
                ...state,
                cart: action.payload
            }
        case DELETE_FROM_CART:
            return {
                ...state,
                cart: action.payload
            }
        case GET_CART:
            return {
                ...state,
                cart: action.payload
            }
        case INCREMENT_CART:
            return {
                ...state,
                cart: action.payload
            }
        case DECREMENT_CART:
            return {
                ...state,
                cart: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default CartReducer;