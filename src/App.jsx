import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/navbar/navbar'
import Banner from './assets/components/navbar/banner/banner'
import Rate from './assets/components/rate/rate'
import ProductCard from './assets/components/productCard/productCard'
import StartSteps from './assets/components/startSteps/startSteps'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<Navbar></Navbar>
<Banner></Banner>
<Rate></Rate>
<ProductCard></ProductCard>
<StartSteps></StartSteps>
 
    </>

   

  )
}

export default App
