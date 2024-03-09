import React from 'react';
import classnames from "classnames";
const InfoBtn = (props) => {
    return (
        <>
            <button className={classnames('items-center flex border gap-3 border-zomato-400 px-4  py-2 rounded-lg',
                {
                    "bg-zomato-400 text-white": props.isActive,
                }
            )}>
                {props.children}
            </button>
        </>
    );
};

export default InfoBtn;