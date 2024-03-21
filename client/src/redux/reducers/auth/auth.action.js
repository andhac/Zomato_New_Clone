import axios from "axios";

//redux
import {SIGN_OUT, SIGN_IN, SIGN_UP, GOOGLE_AUTH} from "./auth.type";
import {clearUser} from "../user/user.action";

export const signIn = (userData) => async (dispatch) => {
    try {
        const User = await axios({
            method: "POST",
            url:"http://localhost:4000/auth/signin",
            data: {credentials: userData}
        })

        localStorage.setItem("zomatoUser", JSON.stringify({token: User.data.token}))
        return dispatch({
            type: SIGN_IN,
            payload: User.data
        })
    }catch (err) {
        return dispatch({
            type: "Error",
            payload: err
        })
    }
}

export const signUp = (userData) => async (dispatch) => {
    try {
        console.log(userData)
        const User = await axios({
            method: "POST",
            url: "http://localhost:4000/auth/signup",
            data: {credentials: userData},
        })

        localStorage.setItem("zomatoUser", JSON.stringify({token: User.data.token}))
        return dispatch({
            type: SIGN_UP,
            payload: User.data
        })
    } catch (err) {
        return dispatch({
            type: "Error",
            payload: err
        })
    }
}
        export const signOut = (userData) => async (dispatch) => {
    try{
     localStorage.removeItem("zomatoUser");
     clearUser();
     window.location.href = 'http://localhost:3000/delivery';
     return dispatch({
         type:SIGN_OUT,
         payload: {}
     })
    }catch (err) {
        return dispatch({
            type: "Error",
            payload: err
        })
    }
}

export const googleAuth = (token) => async (dispatch) => {
    try{
        localStorage.setItem("zomatoUser", JSON.stringify({ token }))

        return dispatch({
            type: GOOGLE_AUTH,
            payload: {}
        })

    }catch (err) {
        return dispatch({
            type: "Error",
            payload: err
        })
    }
}