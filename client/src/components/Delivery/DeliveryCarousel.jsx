import React from 'react';
import Slider from 'react-slick';

//Components
import DeliveryCategory from "./DeliveryCategory";
import {NextArrow,PrevArrow} from "../CarouselArrow";

const DeliveryCarousel = () => {

    const categories = [
        {
          image: "https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png",
          title: "Chole Bhature"
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
            title: "Biryani"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
            title: "Pizza"
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
            title: "Burger"
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
            title: "Cake"
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
            title: "Rolls"
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
            title: "Chicken"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
            title: "Thali"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg",
            title: "North Indian"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
            title: "Momos"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
            title: "Dosa"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/c21624eac87ed1c8c87ef1ea52980ded1632716659.png",
            title: "Chowmein"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
            title: "Sandwich"
        }
    ];

    const settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll:1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoints:1024,
                settings:{
                    slidesToShow: 5
                }
            }
        ]
    }

    return (
        <div>
        <h1 className='text-xl lg:text-4xl mb-10 font-semibold'>Inspiration for your first order</h1>
            <div className ='lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between '>
                {categories.map((food) => (
                    <DeliveryCategory {...food}/>
                ))}
            </div>
            <div className="hidden lg:block">
                <Slider {...settings}>
                    {categories.map((food) => (
                        <DeliveryCategory {...food}/>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default DeliveryCarousel;