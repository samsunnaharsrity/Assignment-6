import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/navbar/navbar'
import Banner from './assets/components/navbar/banner/banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<Navbar></Navbar>
<Banner></Banner>
 
    </>

   

  )
}

export default App
