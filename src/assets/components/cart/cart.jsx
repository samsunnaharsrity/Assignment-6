import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { toast } from 'react-toastify';

const Cart = ({carts,setCarts}) => {
    //console.log(carts);

//single delete btn    
const remove = (item) =>{
    const filteredArray = carts.filter (
        cart => cart.title !== item.title 
    )
    setCarts(filteredArray)
    toast.warning('Remove To Cart')
}

//Proceed to Checkout
const clearDataToCart = () =>(
    setCarts([]),
    toast.success('All Data Cleared')
)


const totalPrice = carts.reduce((sum , item) => sum +  Number(item.price) , 0 )
    console.log(totalPrice);

    return (
        <div className='shadow border border-zinc-200 p-5 w-8/12 mx-auto'>
            <div>
                <h2 className='font-bold text-3xl p-5'>Your Cart</h2>
                
            {/* conditional cart clear */}
            {
                carts.length === 0 ? 
                <p className='flex flex-col text-center items-center gap-5 text-[13px] text-[#627382]'>
                    <img className='w-[100px] ' src="https://i.ibb.co.com/xKNHJbNX/shopping-cart.webp" alt="" />
                    Your Cart Is Empty</p> :
                <>
                <div>
                {<div className='space-y-5'>
                    {
                        carts.map(item =>
                            <div key={item.title} className= 'bg-[#F9FAFC] rounded-xl shadow-xl  '>
                                <div className='flex justify-between items-center p-2'>
                                <div className='flex gap-4 items-center'>
                                    <img className='w-6 h-6 bg-[#E1E7FF] rounded-full p-1 ' src={item.image} alt="" />
                                <div className=''>
                                    <h2 className='text-md font-bold'>{item.title}</h2>
                                    <p className='text-[12px] text-[#627382]'>${item.price}/month</p>
                                </div>
                                </div>


                                <div>
                                    <button className='text-red-500 font-bold'
                                    onClick={() => remove(item)}
                                    >Remove</button>
                                </div>
                                </div>

                            </div>
                            
                        )
                    }
                    <div className='flex justify-between'>
                        <div className='text-[12px] text-[#627382]'>
                            total:
                        </div>
                        <div>${totalPrice}</div>
                    </div>


                    <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-2xl p-2 font-bold text-[10px] text-center'>
                        <button onClick={clearDataToCart}>Proceed to Checkout</button>
                    </div>
                </div>}
                </div>

                </>
            }
            </div>


        </div>
    );
}

export default Cart;
