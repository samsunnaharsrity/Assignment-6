import React from 'react';

const WorkFlow = () => {
    return (
        <div>
            <div className='text-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white space-y-5 p-15'>
                <div>
                    <h2 className='font-bold text-3xl '>Ready to Transform Your Workflow?</h2>
                </div>
                <div>
                    <p className='text-[10px] '>Join thousands of professionals who are already using Digitools to work smarter.
                       <br /> Start your free trial today.</p>
                </div>
                <div className='space-x-4'>
                    <button className='bg-white rounded-full p-2 font-bold text-[10px] '>
                        <span className=' bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent '>Explore Products</span></button>
                    <button className='border border-white text-[10px] rounded-full py-2 px-3'>View Pricing</button>
                </div>
                <div>
                    <p className='text-[10px] '>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>
        </div>
    );
}

export default WorkFlow;
