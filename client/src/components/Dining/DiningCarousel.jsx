import React from 'react';
import Slider from 'react-slick'

//Component
import PictureCarouselCard from "./PictureCarouselCard";
import {NextArrow, PrevArrow } from "../CarouselArrow";

const DiningCarousel = () => {
    const  categories = [
        {
            images: "https://b.zmtcdn.com/data/collections/4a8fc66cfe2a43c7538d5716895a3019_1684739753.png?output-format=webp",
            title: "6 Taj View Restaurant",
            subTitle: "15 Places",
        },
        {
            images: "https://b.zmtcdn.com/data/collections/c3e8fb46e352ebb9d72c4f0cb5d27f39_1686042567.png",
            title: "14 Local Favourite Places",
            subTitle: "13 Places",
        },
        {
            images: "https://b.zmtcdn.com/data/collections/a1e31eb92bb9951aaf1750d88497adb4_1684740352.jpg",
            title: "18 Best Luxury Dining Places",
            subTitle: "20 Places",
        },
        {
            images: "https://b.zmtcdn.com/data/collections/a33a75bb9ce00650cde613173fe9d2ee_1684740006.png",
            title: "6 Best Mughlai Places",
            subTitle: "6 Places",
        },{
        images: "https://b.zmtcdn.com/data/collections/91657c6e0f9452b3d54b4658e7bc90b9_1684741472.jpg",
            title: "12 Blissful Breakfast Places",
            subTitle: "10 Places",
        },
        {
            images: "https://b.zmtcdn.com/data/collections/293255cbfe49f4ebdb244c1bfc3a0f74_1684741669.jpg",
            title: "13 Serene Rooftop Places",
            subTitle: "15 Places",
        },
        {
            images: "https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1684741886.jpg",
            title: "19 Great Cafes",
            subTitle: "18 Places",
        },
        {
            images: "https://b.zmtcdn.com/data/collections/21ebc8e2867c6917de5b0eb1aae8174e_1684741284.jpg",
            title: "13 Best Pubs & Bars",
            subTitle: "15 Places",
        }
    ]
    const setting = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
        <>
            <div className='w-full'>
                <Slider {...setting}>
                    {categories.map((places, index) => (
                        <PictureCarouselCard {...places} key={index}/>
                    ))}

                </Slider>
            </div>
        </>
    );
};

export default DiningCarousel;