import React from 'react';

const PricingSec = () => {
    return (
        <div>
            <div className='w-8/12 mx-auto mt-10 space-y-5 '>
                {/* data sec */}
                <div className='space-y-5'>
                    <h2 className='font-bold text-3xl text-center'>Simple, Transparent Pricing</h2>
                    <p className='text-center text-[13px] text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                {/* card sec */}

                <div>
                    <div>
                        <h2>Starter</h2>
                        <p>Perfect for getting started</p>
                    </div>
                    <div>
                        <p>$0/month</p>
                    </div>
                    <div>
                        <ul>
                            <li>Access to 10 free tools</li>
                            <li>Basic templates</li>
                            <li>Community support</li>
                            <li>1 project per month</li>
                        </ul>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default PricingSec;
