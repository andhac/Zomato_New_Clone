import React, {useState} from 'react';

//Components
import MenuCollection from "../MenuCollection";

const Menu = () => {
    const [menus, setMenu] =useState([
        "https://b.zmtcdn.com/data/menus/289/19167289/c255c12d44dd9c01333a14907cd39d43.jpg",
        "https://b.zmtcdn.com/data/menus/289/19167289/744becbd3a5ed08dc39691239687669d.jpg",
        "https://b.zmtcdn.com/data/menus/289/19167289/120b629e10137deea962aab9a868aff5.jpg",
        "https://b.zmtcdn.com/data/menus/289/19167289/ccfa323cfcc5e7915ce54f7645a5d287.jpg",
        "https://b.zmtcdn.com/data/menus/289/19167289/98983e12d8a14c7dc568a83509f4704e.jpg",
        "https://b.zmtcdn.com/data/menus/289/19167289/18e282f38ee9e5af1e1cc6c15df1f2f5.jpg"
    ])
    return (
        <div className='flex flex-wrap gap-3'>
            <MenuCollection menuTitle='Menu' pages={menus.length} image={menus}/>
        </div>
    );
};

export default Menu;