import React,{useState} from 'react';

//Components
import ReviewModal from "./ReviewModal";

const AddReviewCard = () => {
    const [isOpen, setIsOpen] =useState(false)
    const openModal= () =>{
        if(!localStorage.zomatoUser){
            return alert("Please Sign in to post a review")
        }
        setIsOpen(true)
    }
    return (
        <>
            <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen}/>
            <h3 className='text-xl font-medium'>Rate YYour Experience for</h3>
            <div className='flex items-start gap-3'>
                <div className='flex items-center gap-2'>
                    <input type='radio' name='review' id='dining'/>
                    <label htmlFor='Dining'>Dining</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type='radio' name='review' id='delivery'/>
                    <label htmlFor='delivery'>Delivery</label>
                </div>
            </div>
            <button onClick={openModal} className='text-zomato-400'>
                Write a review
            </button>
        </>
    );
};

export default AddReviewCard;