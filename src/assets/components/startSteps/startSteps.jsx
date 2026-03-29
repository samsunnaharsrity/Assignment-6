import React from 'react';
import userImg from '../../../assets/user.png'
import packageImg from '../../../assets/package.png'
import rocketImg from '../../../assets/rocket.png'

const StartSteps = () => {
    return (
        <div className='w-8/12 mx-auto '>
            <div className='space-y-5'>
                <h2 className='font-bold text-3xl text-center'>Get Started in 3 Steps</h2>
                <p className='text-center text-[13px] text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid  lg:grid-cols-3 gap-5 mt-10 '>

                <div className=' p-5 text-center rounded-2xl space-y-3 shadow-xl'>

                    <p className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-5 h-5 text-[12px] text-center text-white ml-50'>01</p>

                    <div className='flex justify-center items-center object-contain'>
                        <img className='bg-[#E1E7FF] rounded-full w-15 h-15 p-2'
                     src={userImg} alt="" />
                    </div>

                    <h2 className='font-bold'>Create Account</h2>
                    <p className='text-[13px] text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>

                </div>

                <div className='p-5 text-center rounded-2xl space-y-3 shadow-xl'> 

                    <p className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-5 h-5 text-[12px] text-center text-white ml-50'>02</p>

                    <div className='flex justify-center items-center object-contain'>
                        <img className='bg-[#E1E7FF] rounded-full w-15 h-15 p-2' src={packageImg} alt="" />
                    </div>

                    <h2 className='font-bold'>Choose Products</h2>
                    <p className=' text-[13px] text-[#627382]'>Browse our catalog and select the tools <br />that fit your needs.</p>

                </div>

                <div className='p-5 text-center rounded-2xl space-y-3 shadow-xl'>

                    <p className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-5 h-5 text-[12px] text-center text-white ml-50'>03</p>

                    <div className='flex justify-center items-center object-contain'>
                        <img className='bg-[#E1E7FF] rounded-full p-2 w-15 h-15 '  src={rocketImg} alt="" />
                    </div>
                    <h2 className='font-bold'>Start Creating</h2>
                    <p className=' text-[13px] text-[#627382]'>Download and start using your premium <br />tools immediately.</p>

                </div>

            </div>
        </div>
    );
}

export default StartSteps;
