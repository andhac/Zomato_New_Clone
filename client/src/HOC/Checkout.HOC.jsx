import React from 'react';
import {Route, Routes} from "react-router-dom";

//Layout
import CheckoutLayout from "../layout/Checkout.layout";

const CheckoutHoc = ( {component: Component, ...rest}) => {
    return (
        <>
            <Routes>
                <Route
                    {...rest}
                    element={
                        <CheckoutLayout>
                            <Component/>
                        </CheckoutLayout>
                    }
                />
            </Routes>
        </>
    );
};

export default CheckoutHoc;