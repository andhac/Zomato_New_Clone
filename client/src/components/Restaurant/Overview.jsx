import React ,{useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {IoMdArrowDropright} from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";


//Redux
import{ useSelector, useDispatch} from "react-redux";
import {getImage} from "../../redux/reducers/image/image.action";
import {getReview} from "../../redux/reducers/review/review.action";
//Components
import {NextArrow, PrevArrow} from "../CarouselArrow";
import MenuSimilarRestaurantCard from "./MenuSimilarRestaurantCard";
import MenuCollection from "./MenuCollection";
import ReviewCard from "./Reviews/ReviewCard";
import MapView from "./MapView";

const Overview = () => {
    const rupeeSign = "\u20B9";
    const [menuImages , setMenuImages] = useState({
        images: []
    })
    const [reviews, setReviews] = useState([]);
    const{id}  =useParams()

    const reduxState = useSelector(
        (globalState) => globalState.restaurant.selectedRestaurant.restaurant
    );

    const dispatch = useDispatch();
    useEffect(() => {
        if (reduxState){
            dispatch(getImage(reduxState?.menuImages)).then((data) => {
                const images = [];
                data.payload.images.map(({ location }) => images.push(location));
                setMenuImages(images);
            });

            dispatch(getReview(reduxState?._id)).then((data) => setReviews(data.payload.reviews))
        }
    },[reduxState])


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
                    slidesToScroll: 1,
                    nextArrow: false,
                    prevArrow: false
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
                        <MenuCollection menuTitle='menu' pages={menuImages.length} image={menuImages}/>
                    </div>
                    <h4 className='text-lg font-medium my-4'>Cuisines</h4>
                    <div className='flex flex-wrap gap-2'>
                        {reduxState?.cuisine.map((cuisineName, index)=>(
                            <span key={index} className='border border-gray-500 text-blue-600 px-2 py-1 rounded-full'>
                                {cuisineName}
                            </span>
                        ))}
                    </div>
                    <div className='my-4'>
                        <h4 className='text-lg font-medium'>Average Cost</h4>
                        <h6>{rupeeSign}{reduxState?.averageCost} for one order(approx.)</h6>
                        <small className='text-gray-500'>
                            Exclusive of applicable taxes and charges, if any
                        </small>
                    </div>

                    <div className="flex flex-col-reverse">
                        <div className=' my-10 overflow-auto border-b-2'/>
                        <div className=' my-10 overflow-auto border-b-2'/>
                        <div className='my-4'>
                            <ReactStars count={5} onChange={ratingChanged} size={24} activeColor='#ffd700'/>
                            {reviews.map(( review, index ) => (
                                <ReviewCard {...review} key={index}/>
                            ))}
                        </div>
                        <div className='my-4'>
                            <h4 className='text-lg font-medium'>Similar Restaurants</h4>
                            <div className='my-2'>
                                <Slider {...settings}>
                                    <MenuSimilarRestaurantCard
                                        image='https://b.zmtcdn.com/data/pictures/2/3400002/fa3c1f1724df874323b572415f1ab233_featured_v2.jpg'
                                        title='Hotel Moti Palace - Pankhuri Restaurant'/>
                                    <MenuSimilarRestaurantCard
                                        image='https://b.zmtcdn.com/data/pictures/2/3400002/fa3c1f1724df874323b572415f1ab233_featured_v2.jpg'
                                        title='Hotel Moti Palace - Pankhuri Restaurant'/>
                                    <MenuSimilarRestaurantCard
                                        image='https://b.zmtcdn.com/data/pictures/2/3400002/fa3c1f1724df874323b572415f1ab233_featured_v2.jpg'
                                        title='Hotel Moti Palace - Pankhuri Restaurant'/>
                                    <MenuSimilarRestaurantCard
                                        image='https://b.zmtcdn.com/data/pictures/2/3400002/fa3c1f1724df874323b572415f1ab233_featured_v2.jpg'
                                        title='Hotel Moti Palace - Pankhuri Restaurant'/>
                                    <MenuSimilarRestaurantCard
                                        image='https://b.zmtcdn.com/data/pictures/2/3400002/fa3c1f1724df874323b572415f1ab233_featured_v2.jpg'
                                        title='Hotel Moti Palace - Pankhuri Restaurant'/>

                                </Slider>
                            </div>
                        </div>
                        <div className='my-4 w-full md:hidden flex flex-col gap-4'>
                            <MapView title="Haldiram's" phoneNumber="+91 96969858758"
                                     mapLocation={getLatLong("27.162576705297795, 78.03762930370361")}
                                     address='Plot 4, 5, 6, Basement, Ground Floor & First Floor, Basai Mustkil, Main Taj Road, Near Axis Bank, Tajganj, Agra'/>
                        </div>
                    </div>
                </div>
                <aside style={{height: "fit-content"}}
                       className='hidden md:flex md:w-4/12 sticky rounded-xl top-10 bg-white shadow-md  flex-col gap-4 p-2 ml-2'>
                    <MapView title="Haldiram's" phoneNumber="+91 96969858758"
                             mapLocation={getLatLong("27.162576705297795, 78.03762930370361")}
                             address='Plot 4, 5, 6, Basement, Ground Floor & First Floor, Basai Mustkil, Main Taj Road, Near Axis Bank, Tajganj, Agra'/>
                </aside>
            </div>
        </>
    );
};

export default Overview;