import React, {useEffect, useState} from 'react';
import{TiStarOutline} from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import {BiBookmarkPlus} from "react-icons/bi";
import {useParams} from "react-router-dom";

//Redux
import {getSpecificRestaurant} from "../redux/reducers/restaurant/restaurant.action";
import {useDispatch} from "react-redux";
import {getImage} from "../redux/reducers/image/image.action";

//Component
import Navbar from "../components/Navbar";
import ImageGrid from "../components/Restaurant/ImageGrid";
import RestaurantInfo from "../components/Restaurant/RestaurantInfo";
import InfoBtn from "../components/Restaurant/InfoBtn";
import Tabs from "../components/Restaurant/Tabs";
import CartContainer from "../components/Cart/CartContainer";

const RestaurantLayout = ({children}) => {
    const [restaurant, setRestaurant ] = useState({
        images:[],
        name:"",
        cuisine:"",
        address:"",
        restaurantRating:3.5,
        deliveryRating: 4.5
    });
    const {id} = useParams();
    const dispatchEvent = useDispatch();
    useEffect(()=>{
        dispatchEvent(getSpecificRestaurant(id)).then((data)=>{
            setRestaurant((prev) => ({
                ...prev,
                ...data.payload.restaurant
            }))
            dispatchEvent(getImage(data.payload.restaurant.photos)).then((data)=> {
                setRestaurant((prev) => ({
                    ...prev,
                    images: data.payload.images
                }))

            })
        })
    },[])
    const cuisine = restaurant?.cuisine
    return (
        <>
            <Navbar/>
            <div className='container mx-auto px-4 mt-8 lg:px-20 pb-10'>
                <ImageGrid images={restaurant.images}/>
                <RestaurantInfo name={restaurant?.name}
                                restaurantRating={restaurant?.restaurantRating || 0}
                                deliveryRating={restaurant?.deliveryRating || 0}
                                cuisine={restaurant.cuisine?restaurant.cuisine.join(", "): ""}
                                address={restaurant?.address}
                />
                <div className=' mx-auto  my-4 flex flex-wrap gap-3'>
                    <InfoBtn isActive>
                        <TiStarOutline/> Add Review
                    </InfoBtn>
                    <InfoBtn>
                        <RiDirectionLine/> Direction
                    </InfoBtn>
                    <InfoBtn>
                        <BiBookmarkPlus/> Bookmark
                    </InfoBtn>
                    <InfoBtn>
                        <RiShareForwardLine/> Share
                    </InfoBtn>
                </div>
                <div className='my-10'>
                    <Tabs/>
                </div>
                {children}
            </div>
            <CartContainer/>

        </>
    );
};

export default RestaurantLayout;