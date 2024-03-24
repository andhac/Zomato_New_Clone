

import {GET_CART,
    ADD_TO_CART,
    DELETE_FROM_CART,
    INCREMENT_CART,
    DECREMENT_CART,
    UPDATE_CART
} from "./cart.type";


export const getCart = () => async (dispatch) => {
    try{
        let cartData = { cart: [] }

        if(localStorage.zomatoCart){
            const {cart} = JSON.parse(localStorage.getItem("zomatoCart"));
            cartData.cart = cart;
        }
        return dispatch({
            type: GET_CART,
            payload: cartData.cart
        })
    }catch (err) {
        return dispatch({
            type: "ERROR",
            payload: err
        })
    }
}

export const addToCart = (newFood) => async (dispatch) => {
    try{
        let cartData = {cart: []}
        if(localStorage.zomatoCart){
            const {cart} = JSON.parse(localStorage.getItem("zomatoCart"));
            cartData.cart = cart;
        }
        cartData.cart.push(newFood)
        localStorage.setItem('zomatoCart', JSON.stringify({ cart:cartData.cart }));
        return dispatch({
            type: ADD_TO_CART,
            payload: cartData.cart
        })
    }catch (err) {
        return dispatch({
            type: "ERROR",
            payload: err
        })
    }
}

export const deleteCart =(foodId) => async (dispatch) => {
    try{
        let cartData = {cart: []}
        if(localStorage.zomatoCart){
            const {cart} = JSON.parse(localStorage.getItem("zomatoCart"));
            cartData.cart = cart;
        }
        if(!cartData.cart.length){
            return dispatch({
                type:"Error",
                payload:"Cart is Empty"
            })
        }
        cartData.cart = cartData.cart.filter(({_id}) => _id !== foodId)
        localStorage.setItem('zomatoCart', JSON.stringify({ cart:cartData.cart }));
        return dispatch({
            type: DELETE_FROM_CART,
            payload: cartData.cart 
        })
    }catch (err) {
        return dispatch({
            type: "ERROR",
            payload: err
        })
    }
}

export const incrementCart = (foodId) => {
    return async ( dispatch ) => {
        try {
            let cartData = {cart: []}
            if (localStorage.zomatoCart) {
                const {cart} = JSON.parse(localStorage.getItem("zomatoCart"));
                cartData.cart = cart;
            }
            cartData.cart = cartData.cart.map(( food ) =>
                food._id === foodId ? {
                        ...food,
                        quantity: food.quantity + 1,
                        totalPrice: food.price * (food.quantity + 1)
                    }
                    : food
            )
            localStorage.setItem('zomatoCart', JSON.stringify({cart: cartData.cart}));
            return dispatch({
                type: INCREMENT_CART,
                payload: cartData.cart
            })

        } catch (err) {
            return dispatch({
                type: "ERROR",
                payload: err
            })
        }
    };
}
export const decrementCart = (foodId) => async (dispatch) => {
    try{
        let cartData = {cart: []}
        if(localStorage.zomatoCart){
            const {cart} = JSON.parse(localStorage.getItem("zomatoCart"));
            cartData.cart = cart;
        }
        cartData.cart = cartData.cart.map((food) =>
            food._id === foodId ? {...food,
                    quantity: food.quantity-1,
                    totalPrice: food.price*(food.quantity - 1)}
                : food
        )
        localStorage.setItem('zomatoCart', JSON.stringify({ cart:cartData.cart }));
        return dispatch({
            type: DECREMENT_CART,
            payload: cartData.cart
        })

    }catch (err) {
        return dispatch({
            type: "ERROR",
            payload: err
        })
    }
}