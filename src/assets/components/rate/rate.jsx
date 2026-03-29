import React from 'react';

const Rate = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-10 '>
            <div className='flex justify-between w-8/12 mx-auto gap-5 '>
            <div className='border-r-2 border-white/50 '>
                <h2 className='font-bold text-3xl text-white lg:pr-20 '>50K+</h2>
                <p className='text-[15px] text-white'>Active Users</p>
            </div>
            <div className='border-r-2 border-white/50  '>
                <h2 className='font-bold text-3xl text-white lg:pr-30 '>200+</h2>
                <p className='text-[15px] text-white'>Premium Tools</p>
            </div>
            <div>
                <h2 className='font-bold text-3xl text-white'>4.9</h2>
                <p className='text-[15px] text-white'>Rating</p>
            </div>
            </div>
            
        </div>
    );
}

export default Rate;
