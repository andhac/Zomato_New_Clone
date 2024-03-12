import React,{useState} from 'react';
import {AiOutlineCompass} from "react-icons/ai";
import {BiTimeFive} from "react-icons/bi";

//Components
import FloatMenuBtn from "./OrderOnline/FloatMenuBtn";
import MenuListContainer from "./OrderOnline/MenuListContainer";
import FoodList from "./OrderOnline/FoodList";



const OrderOnline = () => {
    const [menu, setMenu] =useState([
        {
            name: "Holi Specials",
            items: [
                {
                    name:"Maida Gunjia",
                    image: "https://b.zmtcdn.com/data/dish_photos/198/e5c170b95f2c7a78713e3de18a996198.jpeg",
                    isAddedToCart: false,
                    rating: 45,
                    description: "",
                    price: ""
                }
            ],
        },
        {
            name: "Restaurant",
            items: [
                {
                    name:"Choley Bhature",
                    image:"https://b.zmtcdn.com/data/dish_photos/7e1/2774be09bd6b1b2f45508ceb350cb7e1.png",
                    isAddedToCart: false,
                    rating: 59,
                    description: "Haldiram's Chole Bhature is a beloved North Indian dish featuring crispy fried bhature bread with spiced chickpeas ",
                    price: "190"
                },
                {
                    name:"Choley Bhature",
                    image:"https://b.zmtcdn.com/data/dish_photos/7e1/2774be09bd6b1b2f45508ceb350cb7e1.png",
                    isAddedToCart: false,
                    rating: 59,
                    description: "Haldiram's Chole Bhature is a beloved North Indian dish featuring crispy fried bhature bread with spiced chickpeas ",
                    price: "190"
                },
                {
                    name:"Choley Bhature",
                    image:"https://b.zmtcdn.com/data/dish_photos/7e1/2774be09bd6b1b2f45508ceb350cb7e1.png",
                    isAddedToCart: true,
                    rating: 59,
                    description: "Haldiram's Chole Bhature is a beloved North Indian dish featuring crispy fried bhature bread with spiced chickpeas ",
                    price: "190"
                },
                {
                    name:"Choley Bhature",
                    image:"https://b.zmtcdn.com/data/dish_photos/7e1/2774be09bd6b1b2f45508ceb350cb7e1.png",
                    isAddedToCart: true,
                    rating: 59,
                    description: "Haldiram's Chole Bhature is a beloved North Indian dish featuring crispy fried bhature bread with spiced chickpeas ",
                    price: "190"
                },
                {
                    name:"Choley Bhature",
                    image:"https://b.zmtcdn.com/data/dish_photos/7e1/2774be09bd6b1b2f45508ceb350cb7e1.png",
                    isAddedToCart: false,
                    rating: 59,
                    description: "Haldiram's Chole Bhature is a beloved North Indian dish featuring crispy fried bhature bread with spiced chickpeas ",
                    price: "190"
                },
            ]
        },
        {
            name: "Sweets",
            items: [],
        },
        {
            name: "Drinks (Beverages)",
            items: [],
        },
        {
            name: "Namkeen & Ready to Eat",
            items: []
        }
    ]);
    const [selected, setSelected] = useState("")

    const onClickHandler = (e) => {
        if (e.target.id) {
            setSelected(e.target.id);
        }
    }
    return (
        <>
            <div className='w-full h-screen flex'>
                <aside className='hidden md:flex flex-col gap-1 border-r overflow-y-scroll  border-gray-200 h-screen w-1/4'>
                    {menu.map((item,index)=>(
                     <MenuListContainer {...item} key={index} onClickHandler={onClickHandler} selected={selected}/>
                    ))}
                </aside>
                <div className='w-full px-3 md:w-3/4'>
                    <div className='pl-3 mb-4'>
                        <h2 className='text-2xl font-semibold'>Order Online</h2>
                        <h4 className='flex items-center gap-2 font-light text-gray-500'>
                            <AiOutlineCompass/> Live Track Your Order | <BiTimeFive/> 45 Min
                        </h4>
                    </div>
                    <section className='flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5'>
                        {menu.map((item , index)=>(
                            <FoodList key={index} {...item} index={index} />
                        ))}
                    </section>
                </div>
            </div>
            <FloatMenuBtn menu={menu} onClickHandler={onClickHandler} selected={selected}/>
        </>
    );
};

export default OrderOnline;