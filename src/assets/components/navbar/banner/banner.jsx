import React from 'react';
import heroImg from '../../../../assets/banner.png'
import playImg from '../../../../assets/play.png'
const Banner = () => {
    return (
        <div className='w-8/12 mx-auto flex justify-between mt-10 '>
            {/* first part */}
            <div className='w-[400px] py-20 space-y-4'>
                <div>
                   <button className="bg-[#E1E7FF] rounded-full p-2 font-bold text-[10px]">
                        <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                            New: AI-Powered Tools Available
                        </span>
                    </button>
                </div>

                <div>
                    <h2 className='font-extrabold text-4xl font-bold mb-4'>Supercharge Your <br /> Digital Workflow</h2>
                    <p className="text-[#627382] text-[14px]">Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                    Explore Products
                    </p>
                </div>

                <div className='flex gap-2 '>
                    <button className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full p-2 font-bold text-[10px] '>Explore Products</button>
                    <button className='flex rounded-full p-2 font-bold text-[10px]  border border-purple-500 gap-1 items-center'>
                        <img className='w-3 h-3' src={playImg} alt="" />
                        <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent '>Watch Demo</span>
                    </button>
                </div>
            </div>
            {/* sec part */}
            <div className='w-[300px] h-[400px] mt-5'>
                <img src={heroImg} alt="" />
            </div>
        </div>
    );
}

export default Banner;

