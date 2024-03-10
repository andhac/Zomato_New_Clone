import React ,{useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {IoMdArrowDropright} from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";


//Components
import {NextArrow, PrevArrow} from "../CarouselArrow";
import MenuSimilarRestaurantCard from "./MenuSimilarRestaurantCard";
import MenuCollection from "./MenuCollection";
import ReviewCard from "./Reviews/ReviewCard";

const Overview = () => {
    const rupeeSign = "\u20B9";
    const [menuimages , setMenuImages] = useState({
        images: ["https://b.zmtcdn.com/data/menus/289/19167289/c255c12d44dd9c01333a14907cd39d43.jpg",
        "https://b.zmtcdn.com/data/menus/289/19167289/744becbd3a5ed08dc39691239687669d.jpg",
        "https://b.zmtcdn.com/data/menus/289/19167289/120b629e10137deea962aab9a868aff5.jpg",
            "https://b.zmtcdn.com/data/menus/289/19167289/ccfa323cfcc5e7915ce54f7645a5d287.jpg",
            "https://b.zmtcdn.com/data/menus/289/19167289/98983e12d8a14c7dc568a83509f4704e.jpg",
            "https://b.zmtcdn.com/data/menus/289/19167289/18e282f38ee9e5af1e1cc6c15df1f2f5.jpg"
        ]
    })
    const [reviews, setReviews] = useState([
        {
            isRestaurantReview: false,
            createAt:"2024-01-01",
            fullName: "John Doe",
            reviewText: "Food is awesome"
        },
        {
            isRestaurantReview: true,
            createAt:"2024-08-01",
            fullName: "John Doe",
            reviewText: "Food is awesome",

        },
        {
            isRestaurantReview: false,
            createAt:"2024-02-01",
            fullName: "John Doe",
            reviewText: "Food is awesome"
        }
    ]);
    const [cuisine, setCuisine] = useState(["Mordern Indian", "Bar Food"])
    const averageCost = 200;

    const{id}  =useParams()
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2 ,
        initialSlide: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 480,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const ratingChanged = (newRating)=>{
        console.log(newRating)
    };
    const getLatLong = (mapAddress) => {
        return mapAddress?.split(",").map(item => parseFloat(item))
    }

    return (
        <>
            <div className='flex flex-col gap-5 md:flex-row relative'>
                <div className='w-full md:w-8/12'>
                     <h2 className='font-semibold text-lg md:text-xl my-4'>
                         About This Resrturant
                     </h2>
                    <div className=' flex justify-between items-center'>
                        <h4 className='text-lg font-medium'>Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className='flex items-center text-zomato-400 gap-1'>
                            See All Menu <IoMdArrowDropright/>
                             </span>
                        </Link>
                    </div>
                    <div className='flex- flex-wrap gap-3 my-4'>
                        <MenuCollection menuTitle='menu' pages={menuimages.images.length} image={menuimages.images}/>
                    </div>
                    <h4 className='text-lg font-medium my-4'>Cuisines</h4>
                    <div className='flex flex-wrap gap-2'>
                        {cuisine.map((cuisineName, index)=>(
                            <span key={index} className='border border-gray-500 text-blue-600 px-2 py-1 rounded-full'>
                                {cuisineName}
                            </span>
                        ))}
                    </div>
                    <div className='my-4'>
                        <h4 className='text-lg font-medium'>Average Cost</h4>
                        <h6>{rupeeSign}{averageCost} for one order(approx.)</h6>
                        <small className='text-gray-500'>
                            Exclusive of applicable taxes and charges, if any
                        </small>
                    </div>
                    <div className='my-4'>
                        <h4 className='text-lg font-medium'>Similar Restaurants</h4>
                        <div className='my-2'>
                            <Slider {...settings}>
                                <MenuSimilarRestaurantCard image='https://b.zmtcdn.com/data/pictures/2/3400002/fa3c1f1724df874323b572415f1ab233_featured_v2.jpg' title='Hotel Moti Palace - Pankhuri Restaurant' />
                                <MenuSimilarRestaurantCard image='https://b.zmtcdn.com/data/pictures/2/3400002/fa3c1f1724df874323b572415f1ab233_featured_v2.jpg' title='Hotel Moti Palace - Pankhuri Restaurant' />
                                <MenuSimilarRestaurantCard image='https://b.zmtcdn.com/data/pictures/2/3400002/fa3c1f1724df874323b572415f1ab233_featured_v2.jpg' title='Hotel Moti Palace - Pankhuri Restaurant' />
                                <MenuSimilarRestaurantCard image='https://b.zmtcdn.com/data/pictures/2/3400002/fa3c1f1724df874323b572415f1ab233_featured_v2.jpg' title='Hotel Moti Palace - Pankhuri Restaurant' />
                                <MenuSimilarRestaurantCard image='https://b.zmtcdn.com/data/pictures/2/3400002/fa3c1f1724df874323b572415f1ab233_featured_v2.jpg' title='Hotel Moti Palace - Pankhuri Restaurant' />

                            </Slider>
                        </div>
                    </div>
                    <div className=' my-10 overflow-auto border-b-2'/>
                    <div className=' my-10 overflow-auto border-b-2'/>
                    <div className='my-4'>
                            <ReactStars count={5} onChange={ratingChanged} size={24} activeColor='#ffd700'/>
                        {reviews.map((review,index )=> (
                            <ReviewCard {...review} key={index}/>
                        ))}
                    </div>
                    <div className='my-4 w-full md:hidden flex flex-col gap-4'>
                        ...Map Stuff
                    </div>
                </div>
                <aside style={{height:"fit-content"}} className='hidden md:flex md:w-4/12 sticky rounded-xl top-10 bg-white shadow-md  flex-col gap-4'>
                    ...Map stuff
                </aside>
            </div>
        </>
    );
};

export default Overview;