import React from 'react';
import {useParams} from "react-router-dom";
import Delivery from "../components/Delivery";
import Dining from "../components/Dining";
import NightLife from "../components/NightLife";


const HomePage = () => {
    const {type} = useParams()
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