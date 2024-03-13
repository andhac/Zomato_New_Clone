import React,{useState} from 'react';
import{TiStarOutline} from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import {BiBookmarkPlus} from "react-icons/bi";

//Component
import Navbar from "../components/Navbar";
import ImageGrid from "../components/Restaurant/ImageGrid";
import RestaurantInfo from "../components/Restaurant/RestaurantInfo";
import InfoBtn from "../components/Restaurant/InfoBtn";
import Tabs from "../components/Restaurant/Tabs";
import CartContainer from "../components/Cart/CartContainer";

const RestaurantLayout = ({children}) => {
    const [restaurant ] = useState({
        images:[
           "https://b.zmtcdn.com/data/pictures/chains/0/550/0385c2a585695eda80703c31b5739b21_featured_v2.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/0/550/2f24d1589ca639c2d6fbe7c336d4224e.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/0/550/d04c74486a9c2f5bb891263a5ac9d63b.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/0/550/12d65a6e6a961f6d7942be9cf5c329aa.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/0/550/ed0c07fac5e0e572b9b3b0ab1739b733.jpg"
        ],
        name:"Haldiram's",
        cuisine:"SouthIndian, NorthIndian, Gujrati",
        address:"Agra ",
        restaurantRating:3.5,
        deliveryRating: 4.5
    });

    return (
        <>
            <Navbar/>
            <div className='container mx-auto px-4 mt-8 lg:px-20 pb-10'>
                <ImageGrid images={restaurant.images}/>
                <RestaurantInfo name={restaurant?.name}
                                restaurantRating={restaurant?.restaurantRating || 0}
                                deliveryRating={restaurant?.deliveryRating || 0}
                                cuisine={restaurant?.cuisine}
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