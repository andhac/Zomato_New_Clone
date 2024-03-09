import React from 'react';
import {Routes,Route} from "react-router-dom";

import RestaurantLayout from "../layout/Restaurant.layout";

const RestaurantHoc = ({component:Component,...rest}) => {
    return (
        <>
            <Routes>
                <Route
                    {...rest}
                    element = {
                        <RestaurantLayout>
                            <Component/>
                        </RestaurantLayout>
                    }
                />
            </Routes>
        </>
    );
};

export default RestaurantHoc;