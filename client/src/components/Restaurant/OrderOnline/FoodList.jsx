import React from 'react';
import classnames from "classnames";

//Components
import FoodItem from "./FoodItem";

const FoodList = (props) => {
    return (
        <>
            <div className=''>
                <div className={classnames('my-4 overflow-auto', {
                    'border-b-2': props.index !== 0
                })}/>
                <h2 className='bg-white top-0 w-full px-2 z-10 py-1 sticky text-xl font-semibold text-gray-800'>
                    {props.name}
                </h2>

                <div className='flex flex-col gap-3'>
                    {props.items.map(( item, index ) => (
                        <FoodItem key={index} _id={item}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FoodList;