import React, {useState} from 'react';
import { useParams, Link } from 'react-router-dom'
import { RiShoppingBag3Line } from'react-icons/ri'
import {IoFastFoodOutline } from 'react-icons/io5'
import { BiDrink } from 'react-icons/bi'
import classNames from "classnames";
const MobileTab = () =>{
   const [allTypes] = useState([
       {
           id:"delivery",
           icon:<RiShoppingBag3Line/>,
           name:"Delivery",
       },
       {
           id:"dining",
           icon:<IoFastFoodOutline/>,
           name:"Dining Out",
       },
       {
           id:"night",
           icon:<BiDrink/>,
           name:"Night Life",
       },

   ]);
    const {type} = useParams();

    return(
        <>
            <div className='lg:hidden bg-white shadow-lg  fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border'>
                {allTypes.map((items) => (
                     // <Link to={`/${items.id}`} className='w-1/4 '>
                     //     <div className={
                     //         type===items.id ? " flex  flex-col relative text-center items-center text-xl text-zomato-400" : "inline  text-center flex-col items-center text-xl"
                     //
                     //     }>
                     //         <div className={
                     //             type === items.id ?" w-full p-3 h-full border-t-2 border-zomato-400 flex flex-col items-center" : "flex flex-col items-center"
                     //         }>
                     //             {items.icon}
                     //             <h5 className='text-sm '>{items.name}</h5>
                     //         </div>
                     //     </div>
                     // </Link>
                    <Link key={items.id} to={`/${items.id}`} className='w-1/4'>
                        <div className={type === items.id ? "flex w-full p-3 border-t-2 border-zomato-400 flex-col items-center text-xl text-zomato-400" : "flex flex-col items-center text-xl"}>
                            {items.icon}
                            <h5 className='text-sm'>{items.name}</h5>
                        </div>
                    </Link>
                ) )}
            </div>
        </>
    )
}

const LargeTab = () =>{
    const [allTypes] = useState([
        {
            id:"dining",
            imageDefault:"https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
            imageActive:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
            name:"Dining Out",
            activeBgColor: "bg-blue-100",
        },
        {
            id:"delivery",
            imageDefault: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
            imageActive:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
            name:"Delivery",
            activeBgColor: "bg-yellow-100",
        },
        {
            id:"night",
            imageActive: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
            imageDefault:"https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
            name:"Night Life",
            activeBgColor: "bg-green-100"
        },

    ]);

    const {type} =useParams();
    return(
        <>
            <div className="hidden  lg:flex gap-14 container px-20 my-8 mx-auto">
                {allTypes.map((item)=> (
                    <Link key={item.id} to={`/${item.id}`} className='w-36' >
                        <div className={classNames(
                            "flex items-center gap-3 pb-2 transition duration-700 ease-in-out",
                            {
                                "border-b-2 border-zomato-400  ": type === item.id
                            }
                        )}>
                            {/*<div className={classNames("w-16 h-16 bg-gray-100 p-4 rounded-full",*/}
                            {/*    {*/}
                            {/*        [`${item.activeBgColor}`]: type === item.id*/}
                            {/*    }*/}
                            {/*)}>*/}
                            {/*    <img src={type === item.id ? item.imageActive : item.imageDefault } alt={item.id} className='w-full h-full'/>*/}
                            {/*    <h3 className={*/}
                            {/*        type === item.id ? "text-xl text-zomato-400" : "text-xl text-gray-700"*/}
                            {/*    }>{item.name}</h3>*/}
                            {/*</div>*/}
                            <div className={classNames("w-16 h-16 p-4 rounded-full",
                                {
                                   [item.activeBgColor]: type === item.id,
                                    "bg-gray-100": type !== item.id
                                }
                            )}>
                                <img src={type === item.id ? item.imageActive : item.imageDefault} alt={item.id}
                                     className='w-full h-full'/>
                            </div>
                            <h3 className={type === item.id ? "text-md text-zomato-400" : "text-md text-gray-700"}>{item.name}</h3>

                        </div>
                    </Link>
                ))}
            </div>
        </>
    )

}

const FoodTab = () => {
    return (
        <>
            <MobileTab/>
            <LargeTab/>
        </>
    );
};

export default FoodTab;