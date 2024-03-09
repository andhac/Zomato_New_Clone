import React, {useState} from 'react';

//Component
import NightLifeCarousel from "./NightLifeCarousel";
import RestaurantCard from "../RestaurantCard";
import {IoMdArrowDropright} from "react-icons/io";
const NightLife = () => {
    const [restaurantList, ] = useState([
        {
            _id:"123456",
            image: {
                images:[
                    {
                        location: "https://b.zmtcdn.com/data/pictures/4/3401744/a5fe55d075d83d4c4d9915f2776d940e_featured_v2.jpg"
                    }
                ]
            },
            name: "The Salt Cafe Kitchen & Bar",
            cuisine:  ["North Indian", "Continental", "Chinese"],
            isPro: false,
            isOff: true,
            durationOfDelivery: 47,
            restaurantReviewValue: 4.9,
        },

    ])
    return (
        <>
            <h1 className='text-xl pb-2 font-light my-4 md:my-8 md:text-3xl md:font-semibold'>
                Collections
            </h1>
            <div className='flex flex-row justify-between p-5'>
                <h5 className=' flex text-lg text-gray-500 '>
                Explore curated lists of top restaurants, cafes, pubs, and bars in Agra, based on trends
                </h5>
                <h5 className=' flex text-lg text-zomato-300 items-center '>
                    All Collection in Agra <IoMdArrowDropright />
                </h5>
            </div>
            <NightLifeCarousel/>
            <h1 className='text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold'>
                Nightlife Restaurants in Agra
            </h1>
            <div className='flex justify-between flex-wrap  mt-5'>
                {restaurantList.map((restaurant)=> (
                    <RestaurantCard{...restaurant} key={restaurant._id} />
                ))}
            </div>
        </>
    );
};

export default NightLife;