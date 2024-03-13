import React, {useState} from 'react';
import {FaUserAlt} from "react-icons/fa";
import {AiOutlineArrowLeft} from "react-icons/ai";

const CheckoutNavbar = () => {
    const [user] = useState({
        fullName:"John Doe",
        image:"https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
    })
    return (
        <>
            <nav className='p-4 flex bg-white shadow-md  w-full items-center'>
                <div className='container px-4 md:px-20 mx-auto'>
                    <div className='flex items-center justify-between w-full'>
                        <AiOutlineArrowLeft/>
                        <div className='w-3/8'>
                            <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='logo' className='w-28'/>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='border  border-gray-300 text-zomato-400 w-12 h-12 rounded-full'>
                                <img src={user?.image} alt={user?.email} className='w-full h-full rounded-full object-cover'/>
                            </div>
                            {user?.fullName}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default CheckoutNavbar;