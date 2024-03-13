import React, {useState} from 'react';
import { IoMdArrowDropdown,IoMdArrowDropright,IoMdArrowDropup } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useHistory } from "react-router-dom"

//Components
import FoodItem from "./FoodItem";
const rupeeSign = "\u20B9";
const CartSm = ( {toggle}) => {
 return (
     <>
         <div className='md:hidden flex items-center justify-between'>
             <div className='flex flex-col items-start'>
                 <small className='flex items-center gap-1' onClick={toggle}>
                    1 Item <IoMdArrowDropup />
                 </small>
                 <h4>
                     {rupeeSign}300 <sub>(plus tax)</sub>
                 </h4>
             </div>
             <button className='flex items-center gap-1 bg-zomato-400 px-3 py-1 text-white rounded-lg'>
                 Continue <IoMdArrowDropright/>
             </button>
         </div>
     </>
 )
}

const CartLg = ({toggle}) => {
    return (
        <>
            <div className='hidden md:flex items-center justify-between'>
                <div className='flex flex-col items-start'>
                    <small className='flex items-center gap-1' onClick={toggle}>
                        1 Item <IoMdArrowDropup/>
                    </small>
                    <h4>
                        {rupeeSign}300 <sub>(plus tax)</sub>
                    </h4>
                </div>
                <button className='flex items-center gap-1 bg-zomato-400 px-3 py-1 text-white rounded-lg'>
                    Continue <IoMdArrowDropright/>
                </button>
            </div>
        </>
    )
}

const CartContainer = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [cartData, setCartData] = useState([])
    const [foods, setFoods] = useState([
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
            rating: false,
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
            quantity:1
        },
    ])

    const toggleCart = () => setIsOpen((prev) => !prev);
    const closeCart = () => setIsOpen(false)

    return (
        <>
            {isOpen && (
                <div className='fixed w-full overflow-y-scroll h-48 bg-white z-10 p-2 bottom-14 px-3'>
                    <div className='flex items-center justify-between md:px-20'>
                        <h3 className='text-xl font-semibold'>Your Orders</h3>
                        <IoCloseSharp onClick={closeCart}/>
                    </div>
                    <hr className='my-2'/>

                    <div className='flex flex-col gap-2 md:px-20'>
                        {foods.map((food)=>(
                            <FoodItem key={food._id} {...food}/>
                        ))}
                    </div>
                </div>
            )}

            <div className='fixed w-full bg-white z-10 p-2 px-3 bottom-0  mx-auto lg:px-20'>
                <CartSm toggle={toggleCart}/>
                <CartLg toggle={toggleCart}/>
            </div>
        </>
    );
};

export default CartContainer;