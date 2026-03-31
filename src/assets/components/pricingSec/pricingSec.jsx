import React from 'react';
import vector from '../../../assets/Vector.png'
import checkWhite from '../../../assets/check-white.png'


const PricingSec = () => {
    return (
        <div>
            <div className='w-7/12 mx-auto m-20 space-y-5 '>
                {/* data sec */}
                <div className='space-y-5'>
                    <h2 className='font-bold text-3xl text-center'>Simple, Transparent Pricing</h2>
                    <p className='text-center text-[10px] text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                {/* card sec */}

            <div className='grid grid-cols-3 gap-4'>
                <div className='space-y-3 shadpw-md p-5 bg-[#F2F2F2] rounded-xl'>
                    <div>
                        <h2 className='text-xl font-bold'>Starter</h2>
                        <p className="flex items-center gap-2 text-[13px] text-[#627382]">Perfect for getting started</p>
                    </div>
                    <div>
                        <p className='text-md font-bold'>$0 <span className='text-[10px] text-[#627382]'>/month</span></p>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-[#627382]">
                        <ul>
                            <li className='flex items-center gap-2'>
                                <img className='w-3 h-2' src={vector} alt="" />
                                Access to 10 free tools</li>
                            <li className='flex items-center gap-2'>
                                <img className='w-3 h-2' src={vector} alt="" />
                                Basic templates</li>
                            <li className='flex items-center gap-2'>
                                <img className='w-3 h-2' src={vector} alt="" />
                                Community support</li>
                            <li className='flex items-center gap-2'>
                                <img className='w-3 h-2' src={vector} alt="" />
                                1 project per month</li>
                        </ul>
                    </div>
                    <div>
                        <button  className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-2xl p-2 font-bold text-[10px] mt-8'>
                            Get Started Free</button>
                    </div>
                </div>  


                <div className='space-y-3 shadow-md bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-5 rounded-xl'>
                    <div>
                        <h2 className='text-xl font-bold text-white'>Pro</h2>
                        <p className="flex items-center gap-2 text-[13px] text-white">Best for professionals</p>
                    </div>
                    <div>
                        <p className='text-md font-bold text-white'>$29<span>/month</span></p>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-white">
                        <ul>
                            <li className='flex items-center gap-2 '>
                                <img className='w-3 h-2' src={checkWhite} alt="" />
                                Access to all premium tools</li>
                            <li className='flex items-center gap-2'>
                                <img className='w-3 h-2' src={checkWhite} alt="" />
                                Unlimited templates</li>
                            <li className='flex items-center gap-2'>
                                <img className='w-3 h-2 ' src={checkWhite} alt="" />
                                Priority support</li>
                            <li className='flex items-center gap-2'>
                                <img className='w-3 h-2' src={checkWhite} alt="" />
                                Unlimited projects</li>
                            <li className='flex items-center gap-2'>
                                <img className='w-3 h-2' src={checkWhite} alt="" />
                                Cloud sync</li>
                            <li className='flex items-center gap-2'>
                                <img className='w-3 h-2' src={checkWhite} alt="" />
                                Advanced analytics</li>
                        </ul>
                    </div>
                    <div>
                        <button  className='bg-white w-full rounded-2xl p-2 font-bold text-[10px] '>
                            <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Start Pro Trial</span></button>
                    </div>
                </div>      


                <div className='space-y-3 shadow-md p-5 bg-[#F2F2F2] rounded-xl'>
                    <div>
                        <h2 className='text-xl font-bold'>Starter</h2>
                        <p className="flex items-center gap-2 text-[13px] text-[#627382]">Perfect for getting started</p>
                    </div>
                    <div>
                        <p className='text-md font-bold'>$99 <span className='text-[10px] text-[#627382]'>/month</span></p>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-[#627382]">
                        <ul>
                            <li className='flex items-center gap-2'>
                                <img className='w-3 h-2' src={vector} alt="" />
                                Everything in Pro</li>
                            <li className='flex items-center gap-2'>
                                <img className='w-3 h-2' src={vector} alt="" />
                                Team collaboration</li>
                            <li className='flex items-center gap-2'>
                                <img className='w-3 h-2' src={vector} alt="" />
                                Custom integrations</li>
                            <li className='flex items-center gap-2'>
                                <img className='w-3 h-2' src={vector} alt="" />
                                Dedicated support</li>
                            <li className='flex items-center gap-2'>
                                <img className='w-3 h-2' src={vector} alt="" />
                                SLA guarantee</li>
                            <li className='flex items-center gap-2'>
                                <img className='w-3 h-2' src={vector} alt="" />
                                Custom branding</li>
                        </ul>
                    </div>
                    <div>
                        <button  className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-2xl p-2 font-bold text-[10px] '>Get Started Free</button>
                    </div>
                </div>      



            </div>


            </div>
        </div>
    );
}

export default PricingSec;
