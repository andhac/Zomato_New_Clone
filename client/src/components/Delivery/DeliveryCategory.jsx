import React from 'react';

const DeliverySmCard = ({ image, title} ) => {
    return (
        <>
            <div className="lg:hidden bg-white shadow rounded-md w-24 md:w-56">
                <div className="w-full h-full h-24">
                    <img className='w-full h-full object-contain object-center rounded-t-md' src={image} alt={title}/>
                </div>
                <div>
                    <h3 className='text-sm my-1 text-center font-light'>{title}</h3>
                </div>
            </div>
        </>
    );
};

const DeliveryLgCard = ( {image, title}) => {
     return(
         <>
             <div className="hidden lg:block w-64  px-9">
                 <div className='w-full h-48'>
                     <img className='w-full h-full object-contain object-center rounded-full' src={image} alt={title}/>
                 </div>
                 <div>
                     <h3 className='text-2xl my-1 text-center'>{title}</h3>
                 </div>
             </div>
         </>
     )
}

const DeliveryCategory = ( props ) => {
    return (
        <>
            <DeliverySmCard {...props}/>
            <DeliveryLgCard {...props}/>
        </>
    )
}

export default DeliveryCategory;