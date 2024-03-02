import React from 'react';
import {Routes,Route} from "react-router-dom";


//layout
import HomePageLayout from "../layout/HomePage.layout";

const HomeHoc = ({component: Component,path, ...rest}) => {
    return (
        <>
            <Routes>
                <Route
                    {...rest}
                    path ={path}
                    element={
                        <HomePageLayout>
                            <Component />
                        </HomePageLayout>
                    }
                />
            </Routes>


        </>
    );
};

export default HomeHoc;