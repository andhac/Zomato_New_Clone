import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {FcGoogle} from "react-icons/fc";

//Redux
import {useDispatch} from "react-redux";
import {signIn} from "../../redux/reducers/auth/auth.action";
import {getMySelf} from "../../redux/reducers/user/user.action";

export default function SignIn({isOpen, setIsOpen}) {

    const [userData, setUserData] = useState({
        email:"",
        password: "",
    })
    const dispatch = useDispatch();

    const handleChnage= (e) => {
        setUserData((prev) =>( {...prev, [e.target.id]: e.target.value}))
    }
    const closeModal = () => {
        setIsOpen(false)
    }
    const submit = () => {
        dispatch(signIn(userData))
        setUserData({email: "", password: ""})
        closeModal()
        window.location.reload()
    }

    const googleSignIn = () => {
        window.location.href = "http://localhost:4000/auth/google"
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal} style={{backgroundColor: "rgba(0, 0 ,0, 0.53 "}}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                    </Dialog.Title>
                                    <div className='mt-2 flex flex-col gap-3 w-full'>
                                        <button className='py-2 justify-center rounded-lg flex items-center gap-2 w-full border border-gray-400 bg-white text-gray-400 hover:bg-gray-100' onClick={googleSignIn}>
                                            Sign In With Google <FcGoogle/>
                                        </button>
                                        <form className='flex flex-col gap-2'>
                                            <div className='w-full flex flex-col'>
                                                <label htmlFor='email'>Email</label>
                                                <input type='text' id='email' value={userData.email}
                                                       onChange={handleChnage} placeholder='user@email.com'
                                                       className='w-full border border-gray-400 py-2 px-3 rounded-lg focus:border-zomato-400'/>
                                            </div>
                                            <div className='w-full flex flex-col mb-3'>
                                                <label htmlFor='password'>Password</label>
                                                <input type='password' id='password' value={userData.password}
                                                       onChange={handleChnage} placeholder='********'
                                                       className='w-full border border-gray-400 py-2 px-3 rounded-lg focus:border-zomato-400'/>
                                            </div>
                                            <div className='w-full text-center bg-zomato-400 text-white py-2 rounded-lg '
                                                 onClick={submit}>
                                                Sign In
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
