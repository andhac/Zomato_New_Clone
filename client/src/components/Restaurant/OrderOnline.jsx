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
                    price: "370"
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
                    name:"Pani Puri",
                    image:"https://b.zmtcdn.com/data/dish_photos/70e/57105bea8c73ddbb70da6b7a6e53d70e.jpg",
                    isAddedToCart: false,
                    rating: 59,
                    description: "A beloved Indian snack consisting of crispy puris served with spicy mint-coriander water ",
                    price: "65"
                },
                {
                    name:"CRaj Kachori",
                    image:"https://b.zmtcdn.com/data/dish_photos/224/ea226aab0b36f017d947f3461ea85224.png",
                    isAddedToCart: true,
                    rating: 59,
                    description: "Raj Kachori is a mouth-watering dish made with a crispy and hollow pastry ",
                    price: "165"
                },
                {
                    name:"Pav Bhaji",
                    image:"https://b.zmtcdn.com/data/dish_photos/adb/720d2be24237529ef19601da60002adb.jpg",
                    isAddedToCart: true,
                    rating: 59,
                    description: "A popular Indian street food featuring a vegetable curry made with mashed potatoes,",
                    price: "190"
                },
                {
                    name:"Matar Kulcha",
                    image:"https://b.zmtcdn.com/data/dish_photos/6af/9735cad1ec4a94bb51b52ce9d1ab66af.jpg",
                    isAddedToCart: false,
                    rating: 59,
                    description: "Matar Kulcha is a spicy and tangy dish made with soft kulchas and ...",
                    price: "190"
                },
            ]
        },
        {
            name: "Sweets",
            items: [
                {
                    name:"Kaju Katli",
                    image:"https://b.zmtcdn.com/data/dish_photos/925/205c48e8627f9d0fc2bab03b8f03c925.png",
                    isAddedToCart: false,
                    rating: 59,
                    description: "",
                    price: "528.57"
                },
                {
                    name:"Coconut Burfi",
                    image:"https://b.zmtcdn.com/data/dish_photos/e83/5528a3f420da45c1d0fa00d54894be83.png",
                    isAddedToCart: false,
                    rating: 59,
                    description: "",
                    price: "310"
                },
                {
                    name:"Plain Burfi",
                    image:"https://b.zmtcdn.com/data/dish_photos/a98/ee6756e615c6def1d232827e1fc6aa98.png",
                    isAddedToCart: false,
                    rating: 59,
                    description: "",
                    price: "310"
                },
                {
                    name:"Moti Choor Ladoo",
                    image:"https://b.zmtcdn.com/data/dish_photos/af0/854009f35b697a91cbc2246c65973af0.png",
                    isAddedToCart: false,
                    rating: 59,
                    description: "",
                    price: "319.04"
                },
            ],
        },
        {
            name: "Drinks (Beverages)",
            items: [
                {
                    name:"Bottled Lassi 300ML",
                    image:"https://b.zmtcdn.com/data/dish_photos/43f/1a6353c5d6a31ad7c0a30a0d89a0143f.png",
                    isAddedToCart: false,
                    rating: 59,
                    description: "Haldiram's bottled lassi is a creamy and delicious traditional Indian yogurt-based beverage that ..",
                    price: "95"
                }, {
                    name:"Aam Panna-200 Ml",
                    image:"https://b.zmtcdn.com/data/dish_photos/ab7/7a81e36c362460ceebbb8944721caab7.png",
                    isAddedToCart: false,
                    rating: 59,
                    description: "Haldiram's Aam Panna is a tangy and refreshing summer drink that captures the ...",
                    price: "57"
                }, {
                    name:"Cold Coffee 300ML",
                    image:"https://b.zmtcdn.com/data/dish_photos/11a/33c41741cbc1726af2849a2fa59ba11a.png",
                    isAddedToCart: false,
                    rating: 59,
                    description: "Cold Coffee is a refreshing and indulgent beverage for coffee lovers seeking a ... ",
                    price: "95"
                },
                {
                    name:"Badam Milk 200 Ml",
                    image:"https://b.zmtcdn.com/data/dish_photos/5a9/bc6180ab36267b90e05eb14f38ae85a9.png",
                    isAddedToCart: false,
                    rating: 59,
                    description: "Haldiram's Badam Milk is a creamy and indulgent beverage that offers a refreshing ...",
                    price: "95"
                },
            ],
        },
        {
            name: "Namkeen & Ready to Eat",
            items: [
                {
                    name:"Aloo Bhujia (440 G)",
                    image:"https://b.zmtcdn.com/data/dish_photos/cb1/eec8856d4f5c0cf5c2a0998142890cb1.png",
                    isAddedToCart: false,
                    rating: false,
                    description: "Haldiram's Aloo Bhujia is a popular Indian snack produced by the well-known brand ...",
                    price: "91"
                },
                {
                    name:"Kachori Small (200g)",
                    image:"https://b.zmtcdn.com/data/dish_photos/91a/cd043ac2137ec22752a863a86be6b91a.png",
                    isAddedToCart: false,
                    rating: 59,
                    description: "Savor the authentic flavors of Indian cuisine with Haldiram's Small Kachori. These bite-sized, ... ",
                    price: "53"
                },
                {
                    name:"All In One (200 G)",
                    image:"https://b.zmtcdn.com/data/dish_photos/778/673994903fc3fd1612f1e85f99f0d778.png",
                    isAddedToCart: false,
                    rating: 59,
                    description: "Haldiram's All in One Namkeen is a popular and flavorful snack mix that ...",
                    price: "46"
                },
                {
                    name:"Moong Dal (200g)",
                    image:"https://b.zmtcdn.com/data/dish_photos/821/80fbd5ef37e146ce072cf7f2aca4b821.png",
                    isAddedToCart: false,
                    rating: 59,
                    description: "Haldiram’s moong dal is a crispy salted namkeen with the goodness of moong ...",
                    price: "51"
                },
            ]
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