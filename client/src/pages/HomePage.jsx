import React from 'react';
import {useParams} from "react-router-dom";
import Delivery from "../components/Delivery";


const HomePage = () => {
    const {type} = useParams()
    return (
        <>
            <div className='my-5'>
                {type === 'delivery' && <Delivery/>}
            </div>
        </>
    );
};

export default HomePage;