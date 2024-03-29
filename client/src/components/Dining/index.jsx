import React, {useState} from 'react';

//Component
import DiningCarousel from "./DiningCarousel";
import RestaurantCard from "../RestaurantCard";
const Dining = () => {
    const [restaurantList, ] = useState([
        {
            _id:"123456",
            image: {
                images:[
                    {
                        location: "https://b.zmtcdn.com/data/pictures/chains/0/550/9361ee4d0e18519da526b87f81f067ae_o2_featured_v2.jpg?output-format=webp"
                    }
                ]
            },
            name: "Haldiram's",
            cuisine:  ["SouthIndian", "NorthIndian" , "Gujrati"],
            isPro: false,
            isOff: true,
            durationOfDelivery: 47,
            restaurantReviewValue: 4.1,
        },
        {
            _id:"123456",
            image: {
                images:[
                    {
                        location: "https://b.zmtcdn.com/data/pictures/chains/0/550/9361ee4d0e18519da526b87f81f067ae_o2_featured_v2.jpg?output-format=webp"
                    }
                ]
            },
            name: "Haldiram's",
            cuisine:  ["SouthIndian", "NorthIndian" , "Gujrati"],
            isPro: false,
            isOff: true,
            durationOfDelivery: 47,
            restaurantReviewValue: 4.1,
        },
        {
            _id:"123456",
            image: {
                images:[
                    {
                        location: "https://b.zmtcdn.com/data/pictures/chains/0/550/9361ee4d0e18519da526b87f81f067ae_o2_featured_v2.jpg?output-format=webp"
                    }
                ]
            },
            name: "Haldiram's",
            cuisine:  ["SouthIndian", "NorthIndian" , "Gujrati"],
            isPro: false,
            isOff: true,
            durationOfDelivery: 47,
            restaurantReviewValue: 4.1,
        },
        {
            _id:"123456",
            image: {
                images:[
                    {
                        location: "https://b.zmtcdn.com/data/pictures/chains/0/550/9361ee4d0e18519da526b87f81f067ae_o2_featured_v2.jpg?output-format=webp"
                    }
                ]
            },
            name: "Haldiram's",
            cuisine:  ["SouthIndian", "NorthIndian" , "Gujrati"],
            isPro: false,
            isOff: true,
            durationOfDelivery: 47,
            restaurantReviewValue: 4.1,
        },
        {
            _id:"123456",
            image: {
                images:[
                    {
                        location: "https://b.zmtcdn.com/data/pictures/chains/0/550/9361ee4d0e18519da526b87f81f067ae_o2_featured_v2.jpg?output-format=webp"
                    }
                ]
            },
            name: "Haldiram's",
            cuisine:  ["SouthIndian", "NorthIndian" , "Gujrati"],
            isPro: false,
            isOff: true,
            durationOfDelivery: 47,
            restaurantReviewValue: 4.1,
        },
        {
            _id:"123456",
            image: {
                images:[
                    {
                        location: "https://b.zmtcdn.com/data/pictures/chains/0/550/9361ee4d0e18519da526b87f81f067ae_o2_featured_v2.jpg?output-format=webp"
                    }
                ]
            },
            name: "Haldiram's",
            cuisine:  ["SouthIndian", "NorthIndian" , "Gujrati"],
            isPro: false,
            isOff: true,
            durationOfDelivery: 47,
            restaurantReviewValue: 4.1,
        },

    ])
    return (
        <>
            <h1 className='text-xl my-4 md:my-8 md:text-3xl md:font-semibold'>
                Dine-Out Restaurant in Agra
            </h1>
            <DiningCarousel/>
            <h1 className='text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold'>
            Trending Dining Restaurant in Agra
            </h1>
            <div className='flex justify-between flex-wrap  mt-5'>
                {restaurantList.map((restaurant)=> (
                    <RestaurantCard{...restaurant} key={restaurant._id} />
                ))}
            </div>
        </>
    );
};

export default Dining;