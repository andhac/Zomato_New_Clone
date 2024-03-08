import React from 'react';
import Slider from 'react-slick'

//Component
import PictureCarouselCard from "./PictureCarouselCard";
import {NextArrow, PrevArrow } from "../CarouselArrow";

const NightLifeCarousel = () => {
    const  categories = [

        {
            images: "https://b.zmtcdn.com/data/collections/21ebc8e2867c6917de5b0eb1aae8174e_1684741284.jpg",
            title: "13 Best Pubs & Bars",
            subTitle: "15 Places",
        }
    ]
    // const setting = {
    //     arrows: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll:1,
    //     nextArrow: <NextArrow/>,
    //     prevArrow: <PrevArrow/>,
    //     responsive: [
    //         {
    //             breakpoints:1024,
    //             settings:{
    //                 slidesToShow: 5
    //             }
    //         }
    //     ]
    // }

    return (
        <>
            <div className='w-full'>
                    {categories.map((places,index) => (
                        <PictureCarouselCard {...places} key={index}/>
                    ))}
            </div>
        </>
    );
};

export default NightLifeCarousel;