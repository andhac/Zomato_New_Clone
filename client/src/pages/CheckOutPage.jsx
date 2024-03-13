import React, {useState} from 'react';
import {BsShieldLockFill} from "react-icons/bs";

//Components
import FoodItem from "../components/Cart/FoodItem";
import AddressList from "../components/Checkout/AddressList";
const CheckOutPage = () => {
    const address = [
        {
            name:"Home",
            address:"India Gate, New Delhi, India",
        },
        {
            name:"Gym",
            address:"Gym, New Delhi, India",
        },
        {
            name:"Office",
            address:"Office, New Delhi, India",
        }
    ]
    const foods =[
        {
            name:"Moong Dal (200g)",
            image:"https://b.zmtcdn.com/data/dish_photos/821/80fbd5ef37e146ce072cf7f2aca4b821.png",
            rating: 59,
            description: "Haldiram’s moong dal is a crispy salted namkeen with the goodness of moong ...",
            price: "51",
            quantity:1
        },
        {
            name:"Aloo Bhujia (440 G)",
            image:"https://b.zmtcdn.com/data/dish_photos/cb1/eec8856d4f5c0cf5c2a0998142890cb1.png",
            description: "Haldiram's Aloo Bhujia is a popular Indian snack produced by the well-known brand ...",
            price: "91",
            quantity:1
        },
        {
            name:"Bottled Lassi 300ML",
            image:"https://b.zmtcdn.com/data/dish_photos/43f/1a6353c5d6a31ad7c0a30a0d89a0143f.png",
            rating: 59,
            description: "Haldiram's bottled lassi is a creamy and delicious traditional Indian yogurt-based beverage that ..",
            price: "95",
            quantity: 3
        },
    ]

    return (
        <>
            <div className='my-3 flex flex-col gap-3 items-center'>
                <h1 className='text-xl text-center md:text-2xl font-bold'>Checkout</h1>
                <div className='w-full md:w-3/5 rounded-lg py-3 shadow-lg bg-white flex flex-col items-center'>
                    <h3 className='text-lg font-semibold'>Summary</h3>
                    <div className='flex w-full flex-col gap-2 items-center'>
                        <h5 className='text-base tracking-wider'>Order From</h5>
                        <div className='flex flex-col items-center w-full text-gray-400'>
                            <h4>Domino's Pizza</h4>
                            <small>GTB Nagar, New Delhi</small>
                        </div>
                        <div className='my-4 h-32 overflow-y-scroll px-4 flex flex-col gap-2 w-full md:w-3/5'>
                            {foods.map((food)=> (
                                <FoodItem key={food._id} {...food}/>
                            ))}
                        </div>
                        <div className='flex flex-col gap-3 w-full md:w-3/5 items-center'>
                            <h4 className='text-xl font-semibold'>Choose Address</h4>
                            <AddressList address={address}/>
                        </div>
                    </div>
                    <button className='flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5  h-14 text-white font-medium text-lg bg-zomato-400 rounded-lg'>
                       Pay Securely <BsShieldLockFill />
                    </button>
                </div>

            </div>
        </>
    );
};

export default CheckOutPage;