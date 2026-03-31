import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';



const ProductCarts = ({product,carts, setCarts}) => {
    const [isBuy , setIsBuy] = useState(false)


const handleBuyBtn = () =>{
    setIsBuy(!isBuy)
    setCarts([...carts ,product])
    toast.success('Added To Cart')
}

    return (
<div className=' '>
    <div className='p-4 rounded-2xl space-y-2 shadow-xl border border-zinc-300 h-auto'>

            <div className='bg-[#E1E7FF] rounded-full text-[10px] w-[60px] p-1 text-center ml-43'>
                <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>{product.badge}</span> 
            </div>
            <div>
                <img className='w-6 h-6 bg-[#E1E7FF] rounded-full p-1' src={product.image} alt="" />
                
            </div>

            <div className='space-y-2'>
                <h2 className='text-xl font-bold'>{product.title}</h2>
                <p className='text-[13px] text-[#627382]'>{product.description}</p>
                <div className='text-md font-bold'>${product.price} <span className='text-[10px] text-[#627382]'>/month</span></div>


                <ul>
                {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-[13px] text-[#627382]">
                    <FaCheck className="text-green-500" />
                    {feature}
                </li>
                ))}
                </ul>
            </div>

            <div>
                <button onClick={handleBuyBtn} className={` text-white w-full rounded-2xl p-2 font-bold text-[10px] 
                ${isBuy ? "bg-green-400" : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA]" }`}>
                    {isBuy ? 'Add To Cart' : 'Buy Now' }</button>
            </div>
    </div>


</div>
    );
}

export default ProductCarts;
