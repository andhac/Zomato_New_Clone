import axios from "axios";

//redux type
const {GET_IMAGE} = require("./image.type");

export const getImage = (_id) => async dispatch => {
    try{
        const image = await axios({
            method:"GET",
            url:`http://localhost:4000/image/${_id}`
        })

        return dispatch({
            type: GET_IMAGE,
            payload: image.data
        })
    }catch (error){
        return dispatch({
            type:"ERROR",
            payload: error
        })
    }
}