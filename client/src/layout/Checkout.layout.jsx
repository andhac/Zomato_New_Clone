import React from 'react';

//Components
import Navbar from "../components/Navbar/CheckoutNavbar";

const CheckoutLayout = (props) => {
    return (
        <>
         <Navbar/>
         <div className='container mx-auto px-4 lg:px-20'></div>
            {props.children}
        </>
    );
};

export default CheckoutLayout;