import React,{useState, useEffect} from 'react';
import {TiStarFullOutline} from "react-icons/ti";
import dayjs from "dayjs";

import{useDispatch} from "react-redux";
import {getUser} from "../../../redux/reducers/user/user.action";

const ReviewCard = (props) => {
    const dispatch = useDispatch();
    const [user , setUser] = useState("")
    useEffect(()=>{
        dispatch(getUser(props.user)).then((data) => setUser(data.payload.user.fullName))
    },[])
    return (
        <>
            <div className='my-3 flex flex-col gap-3'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <div className='w-10 h-10 rounded-full '>
                            <img src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                                 alt='user'
                                 className='w-full h-full rounded-full object-cover'/>
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-lg font-semibold'>{user}</h3>
                            <small className='text-gray-500'>5 reviews &#8226; 3 Followers </small>
                        </div>
                    </div>
                    <button className='text-zomato-400 border-zomato-400 py-2 rounded-lg px-4' >Follow</button>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='items-center gap-3 flex'>
                        <span className='text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1'>
                            {props.rating} <TiStarFullOutline/>
                        </span>
                        <h5 className='font-regular uppercase'>
                            {props.isRestaurantReview? "Dining" : "Delivery"}
                        </h5>
                        <small className='text-gray-500'>
                            {dayjs(props.createAt).format("DD-MM-YYYY")}
                        </small>
                    </div>
                    <div className='w-full'>
                        <p className='w-full text-gray-600 font-light text-base'> {props.reviewText}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewCard;