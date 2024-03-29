import React,{ useEffect } from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

//redux actions
import { getRestaurant } from "../redux/reducers/restaurant/restaurant.action";

//Components
import Delivery from "../components/Delivery";
import Dining from "../components/Dining";
import NightLife from "../components/NightLife";


const HomePage = () => {
    const {type} = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurant())
    }, []);


    return (
        <>
            <div className='my-5'>
                {type === 'delivery' && <Delivery/>}
                {type === 'dining' && <Dining/>}
                {type === 'night' && <NightLife/>}
            </div>



        </>
    );
};

export default HomePage;