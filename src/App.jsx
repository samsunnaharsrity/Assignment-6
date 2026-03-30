import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/navbar/navbar'
import Banner from './assets/components/navbar/banner/banner'
import Rate from './assets/components/rate/rate'
import ProductCard from './assets/components/productCard/productCard'
import StartSteps from './assets/components/startSteps/startSteps'
import PricingSec from './assets/components/pricingSec/pricingSec'
import Product from './assets/products/product'


const getData = async () =>{
  const res = await fetch ('/cardData.json')
  return res.json();
}


const dataPromise = getData();


function App() {


  return (
    <>

<Navbar></Navbar>
<Banner></Banner>
<Rate></Rate>
<ProductCard></ProductCard>
<Product dataPromise= {dataPromise}></Product>
<StartSteps></StartSteps>
<PricingSec></PricingSec>

 
    </>

   

  )
}

export default App
