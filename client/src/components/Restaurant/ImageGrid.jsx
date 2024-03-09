import React from 'react';
import {AiOutlineCamera} from "react-icons/ai";


const ImageGrid = (props) => {
    return (
        <>
            <div className='w-full mt-3 h-52 md:hidden'>
                <img src={props.images.length && props.images[0]} alt='Restaurant' className='w-full h-full object-center object-cover rounded-lg'/>
            </div>
            <div className='hidden w-full h-96 md:flex gap-1'>
                <div className='w-full h-full overflow-hidden'>
                    <img src={props.images.length && props.images[0]} alt='Restaurant'
                         className='w-full h-full object-center object-cover  transform transition duration-700 hover:scale-110'/>
                </div>
                <div className='w-1/4 h-full flex flex-col gap-1 overflow-hidden'>
                    <div className='w-full h-2/4 overflow-hidden '>
                        <img src={props.images.length && props.images[1]} alt='Restaurant'
                             className=' h-full object-center object-cover rounded-lg transform transition duration-700 hover:scale-110'/>
                    </div>
                    <div className='w-full h-2/4 overflow-hidden '>
                        <img src={props.images.length && props.images[2]} alt='Restaurant'
                         className=' h-full object-center object-cover rounded-lg transform transition duration-700 hover:scale-110'/>
                    </div>
                </div>
                <div className='w-1/4 h-full flex flex-col gap-1 overflow-hidden'>
                    <div className='w-full h-full relative'>
                        <img src={props.images.length && props.images[3]} alt='restaurant' className='w-full h-full object-cover rounded-lg'/>
                        <div className='absolute inset-0 bg-opacity-40 bg-black w-full h-full rounded-lg'/>
                        <h4 className='absolute inset-y-2/4 z-20 w-full h-full text-center text-white font-semibold text-lg'>View Gallery</h4>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ImageGrid;