import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const Sidebar1 = () => {

    const navigate = useNavigate();
    return (
        <div className='w-[25%] h-[full] flex-col p-2  text-white bg-black hidden lg:flex'>
            <div className='bg-[#121211] h-[15%] rounded flex-col flex justify-around '>
                <div onClick={() => navigate('/')} className='  gap-3 pl-2 m-2 flex items-center cursor-pointer '>
                    <img src={assets.home_icon} className='w-6' />
                    <p className='text-white font-bold ' >Home</p>

                </div>
                <div className='  gap-3 pl-2  m-2 flex items-center cursor-pointer'>
                    <img src={assets.search_icon} className='w-6' />
                    <p className='text-white font-bold ' >Search</p>
                </div>
            </div>
            <div className='bg-[#121212] mt-2 h-[85%] rounded '>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3 '>
                        <img className='w-6' src={assets.stack_icon} alt="" />
                        <p className='text-white font-bold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3 '>
                        <img className='w-6' src={assets.arrow_icon} alt="" />
                        <img className='w-6' src={assets.plus_icon} alt="" />
                    </div>
                </div>
                <div className='p-4 bg-[#242424] m-2 flex font-semibold gap-3 flex-col rounded justify-start items-start'>
                    <h1>Create your first playlist</h1>
                    <p className='font-light'>it's easy, we will help you</p>
                    <button className='bg-white rounded-full mt-4 px-4 py-1.5 text-black font-bold'>Create playlist</button>
                </div>
                <div className='p-4 bg-[#242424] m-2 flex font-semibold gap-3 flex-col rounded justify-start items-start '>
                    <h1>Let's find some podcasts to follow</h1>
                    <p className='font-light'>We'll keep you updated on new episodes </p>
                    <button className='bg-white rounded-full mt-4 px-4 py-1.5 text-black font-bold'>Browse podcasts</button>
                </div>
            </div>
        </div >
    )
}

export default Sidebar1
