import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
        <>
            <div className='w-full h-screen'>
                <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/f602d484-99ee-4a68-a318-669bdff99948/TR-en-20220808-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
                <div className='bg-black/60 top-0 left-0 fixed w-full h-screen'></div>
                <div className='w-full fixed px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Sign up</h1>
                            <form className='w-full flex flex-col py-4'>
                                <input type="email" placeholder='email' className='p-3 my-2 bg-gray-700 rounded' />
                                <input type="password" placeholder='password' className='p-3 my-2 bg-gray-700 rounded' />
                                <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                                    Sign Up
                                </button>
                                <div className='flex justify-between items-center text-sm text-gray-400'>
                                    <p>
                                        <input className='mr-2' type='checkbox' />
                                        Remember me
                                    </p>
                                    <p>Need Help?</p>
                                </div>
                                <p className='py-8'>
                                    <span className='text-gray-400'>
                                        Already subscribed to Netflix?
                                    </span>{' '}
                                    <Link to='/login'>Sign In</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Signup