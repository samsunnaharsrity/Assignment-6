import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/navbar/navbar'
import Banner from './assets/components/navbar/banner/banner'
import Rate from './assets/components/rate/rate'
import ProductCard from './assets/components/productCard/productCard'
import StartSteps from './assets/components/startSteps/startSteps'
import PricingSec from './assets/components/pricingSec/pricingSec'
import Product from './assets/products/product'
import ProductCarts from './assets/components/productCarts/productCarts'
import Cart from './assets/components/cart/cart'
import WorkFlow from './assets/components/workFlow/workFlow'


const getData = async () =>{
  const res = await fetch ('/cardData.json')
  return res.json();
}


const dataPromise = getData();


function App() {


//productCart er  
const [activeCart , setActiveCart] = useState('product')
//console.log(activeCart);


//cart er 
const [carts , setCarts] = useState([])
console.log(carts);

  return (
    <>

<Navbar></Navbar>
<Banner></Banner>
<Rate></Rate>
<ProductCard activeCart={activeCart} setActiveCart={setActiveCart} carts ={carts}> </ProductCard>

{activeCart === 'product' && <Product dataPromise={dataPromise} carts={carts} setCarts ={setCarts} />}
{activeCart === 'cart' && <Cart carts={carts} setCarts ={setCarts}/>}

<StartSteps></StartSteps>
<PricingSec></PricingSec>
<WorkFlow></WorkFlow>

 
    </>

   

  )
}

export default App
