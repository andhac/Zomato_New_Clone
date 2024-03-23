import React, {useEffect, useState} from 'react';

//Redux
import {useSelector, useDispatch} from "react-redux";
import {getImage} from "../../../redux/reducers/image/image.action";
//Components
import MenuCollection from "../MenuCollection";

const Menu = () => {
    const dispatch = useDispatch();
    const reduxState = useSelector((globalState) =>
        globalState.restaurant.selectedRestaurant.restaurant
    )
    const [menus, setMenu] =useState([])

    useEffect(() => {
        if (reduxState){
            dispatch(getImage(reduxState?.menuImages)).then((data)=>{
                const images = []
                console.log(data.payload)
                data.payload.images.map(({location}) => images.push(location));
                setMenu(images)
            })
        }
    }, [reduxState]);
    return (
        <div className='flex flex-wrap gap-3'>
            <MenuCollection menuTitle='Menu' pages={menus.length} image={menus}/>
        </div>
    );
};

export default Menu;