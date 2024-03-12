import React ,{useState} from 'react';
import MenuCategory from "./MenuCategory";

const MenuListContainer = (props) => {
    return (
        <>
            <div className='W-full flex flex-col gap-3 cursor-pointer'>
                <MenuCategory
                    name={props.name}
                    items={props.items}
                    onClickHandler={props.onClickHandler}
                    isActive={props.selected === props.name}/>
            </div>
        </>
    );
};

export default MenuListContainer;