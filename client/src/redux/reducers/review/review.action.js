import axios from "axios";

//redux
import {GET_REVIEW, POST_REVIEW} from "./review.type";

export const getReview = (resId) => async (dispatch) => {
    try{
    const reviewList = await axios({
        method: "GET",
        url: `http://localhost:4000/reviews/${resId}`,
    })
        return dispatch({
            type: GET_REVIEW,
            payload: reviewList.data
        })
    }catch (err){
        dispatch({
            type: "Error",
            payload: err
        })
    }
}

export const postReview = (reviewData) => async (dispatch) => {
    try{
        await axios({
            method: "POST",
            url: "http://localhost:4000/reviews/new",
            data: { reviewData }
        })
        return dispatch({
            type: POST_REVIEW,
            payload: reviewData
        })
    }catch (err){
        dispatch({
            type: "Error",
            payload: err
        })
    }
}