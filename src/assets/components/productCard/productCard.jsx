import React, { useState } from 'react';


const ProductCard = ({activeCart, setActiveCart,carts}) => {


    return (
        <div>
            <div className='w-8/12 mx-auto mt-10 space-y-5 '>
                {/* heading */}
                <div className='space-y-5'>
                    <h1 className='font-bold text-3xl text-center'>Premium Digital Tools</h1>
                    <p className='text-center text-[10px] text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                </div>


                {/* btn div */}
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-box bg-transparent justify-center">
                <input type="radio" name="my_tabs_1" 
                className="tab rounded-full w-40 "
                aria-label="Products"
                checked={activeCart === 'product'}
                onChange={() => setActiveCart('product')}
                

                />


                <input type="radio" name="my_tabs_1"
                className="tab rounded-full w-40" 
                aria-label={`Cart (${carts.length})`}
                checked={activeCart === 'cart'}
                onChange={() => setActiveCart('cart')}

                />
                </div>
                

                <div></div>
            </div>
        </div>
    );
}

export default ProductCard;
