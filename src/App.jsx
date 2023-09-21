import { useEffect, useState, createContext } from 'react';
import './App.css'
import Foods from './components/Foods/Foods';
import Header from './components/header/header'
import { useLoaderData, Outlet, useNavigation } from 'react-router-dom';
export const CartContext = createContext()

function App() {
  const isLoading = useNavigation()
  const [cart,setCart] = useState([])

  return (
    <div className="container mx-auto">
        <Header cart={cart}></Header>
        <div className=''>
          {
            isLoading.state === "loading" ? <span className="loading loading-bars loading-lg mt-[30vh] text-4xl mx-auto block"></span> : 
            <CartContext.Provider value={[cart,setCart]}>
              <Outlet></Outlet>
            </CartContext.Provider>
          }
          
        </div>
    </div>
  )
}

export default App
