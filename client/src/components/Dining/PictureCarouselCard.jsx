import React from 'react';
import { IoMdArrowDropright } from "react-icons/io";

const PictureCarouselCard = ({images, title, subTitle}) => {
    return (
        <>
            <div className='w-full h-64 relative px-4 overflow-hidden'>
                <div className=' w-full h-full relative'>
                    <img src={images}
                         alt='Dining'
                         className=' w-full h-full object-cover object-center transition duration-700 ease-in-out rounded-lg'
                    />
                    <div className='absolute inset-0 w-full h-full bg-opacity-40 bg-black rounded-lg' />
                </div>

                <div className='absolute w-full left-8 bottom-2 text-white' >
                    <h4 className='z-10 text-xl'>{title}</h4>
                    <h6 className='z-10 flex items-center'>
                        {subTitle} <IoMdArrowDropright/>
                    </h6>
                </div>
            </div>
        </>
    );
};

export default PictureCarouselCard;