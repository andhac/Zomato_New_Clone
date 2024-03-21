import React,{useState} from 'react';
import {FaUserAlt} from 'react-icons/fa';
import {HiLocationMarker} from "react-icons/hi";
import {IoMdArrowDropdown,IoMdArrowDropup} from "react-icons/io";
import {RiSearch2Line} from "react-icons/ri";
import {useNavigate} from 'react-router-dom'

//Components
import Signup from "../Auth/SignUp";
import SignIn from "../Auth/SignIn";

//Reeux
import {useSelector,useDispatch} from "react-redux";
import {signOut} from "../../redux/reducers/auth/auth.action";

const MobileNav = ({SignIn , SignUp}) =>{
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    // const [user, setUser] = useState({});
    const reduxState = useSelector((globalState) => globalState.user.user);
    const dispatch = useDispatch();

    return(
        <div className='flex w-full items-center justify-between lg:hidden'>
            <div className='w-28'>
                <img  src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='logo' className='w-full h-full'/>
            </div>
            <div className='flex items-center gap-3 relative'>
                <button className='bg-zomato-400 text-white py-2 px-3 rounded-full'>Use App</button>
                {reduxState?.user?.fullName ? (
                    <>
                        <div onClick={()=> setIsDropDownOpen((prev)=> !prev)} className='border p-2 border-gray-300 text-zomato-400 w-10 h-10 rounded-full'>
                            <img src='/logo192.png' alt='' className='w-full h-full rounded-full object-cover'/>
                        </div>
                        {isDropDownOpen && (
                            <div className='absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2'>
                                <button onClick={() => dispatch(signOut())}>Sign Out</button>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <span onClick={()=>setIsDropDownOpen((prev)=> !prev)} className='border p-2 border-gray-300 text-zomato-400 rounded-full'>
                            <FaUserAlt className='w-full h-full'/>
                            {isDropDownOpen && (
                                <div className='absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2'>
                                    <button onClick={SignIn} >Sign In</button>
                                    <button onClick={SignUp}>Sign Up</button>
                                </div>
                            )}
                        </span>
                    </>
                )}
            </div>
        </div>
    )
}

const LargeNav = ({SignIn , SignUp}) =>{
    const dispatch = useDispatch();
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    // const [user, setUser] = useState({
    // });
    const history = useNavigate();
    const handleLogoClick = () => {
        history('/delivery')
    }
    const reduxState = useSelector((globalState) => globalState.user.user);
    return(
        <>
            <div className='hidden lg:inline container px-20 mx-auto'>
                <div className='gap-4 w-full items-center justify-around flex'>
                    <div className='w-28'>
                        <img onClick={handleLogoClick} src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='logo'/>
                    </div>
                    <div className='w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded '>
                        <div className='flex items-center gap-2 border-r-2 border-gray-300 pr-2'>
                            <span className='text-zomato-400'>
                                <HiLocationMarker/>
                            </span>
                            <input type='text' placeholder='Agra' className=' focus:outline-none'/>
                            <IoMdArrowDropdown/>
                        </div>
                        <div className='flex w-full items-center gap-2'>
                            <RiSearch2Line/>
                            <input type='search' placeholder='Search for Restaurant, cuisine or a dish'
                                   className='w-full focus:outline-none'/>
                        </div>
                    </div>
                    {reduxState?.user?.fullName? (
                        <div className='relative w-20'>
                            <div onClick={()=> setIsDropDownOpen((prev)=> !prev)} className='border border-gray-300 text-zomato-400 w-full h-20 rounded-full'>
                                <img src='/logo192.png' alt='Avtar' className='w-full h-full rounded-full object-cover'/>
                            </div>
                            {isDropDownOpen && (
                                <div className='absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2'>
                                    <button onClick={() => dispatch(signOut())}>Sign Out</button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className='flex gap-4'>
                            <button onClick={SignIn} className='text-gray-500 text-lg hover:text-gray-800'>Login</button>
                            <button onClick={SignUp} className='text-gray-500 text-lg hover:text-gray-800'>Sign Up</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}


const Navbar = () => {
    const [openSignIn,setOpenSignIn] = useState(false)
    const [openSignUp, setOpenSignUp] = useState(false)
    const openSignInModel = () => setOpenSignIn(true)
    const openSignUpModel = () => setOpenSignUp(true)

    return (
        <>
            <SignIn isOpen={openSignIn} setIsOpen={setOpenSignIn}/>
            <Signup isOpen={openSignUp} setIsOpen={setOpenSignUp}/>

            <nav className=" p-4 flex bg-white shadow-md  lg:shadow-none w-full items-center ">
                <MobileNav SignIn={openSignInModel} SignUp={openSignUpModel}/>
                <LargeNav SignIn={openSignInModel} SignUp={openSignUpModel}/>
            </nav>
        </>
    );
};

export default Navbar;
