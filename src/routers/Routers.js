import { Routes, Route, Navigate } from 'react-router-dom'


import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Singup from '../pages/Signup'
import ProtectedRoute from './ProtectedRoute'

import Dashboard from '../admin/Dashboard'
import AddProducts from '../admin/AddProducts'
import AllProducts from '../admin/AllProducts'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='home' element={<Home/> } />
      <Route path='shop' element={<Shop/> } />
      <Route path='kosik' element={<Cart/> } />
      <Route path='shop/:id' element={<ProductDetails/> } />

      <Route path='/*' element={<ProtectedRoute />} >
      <Route path='pokladna' element={<Checkout/>} />
      <Route path='nastenka/vsechny-produkty' element={<AllProducts/>} />
      <Route path='nastenka/pridat-produkt' element={<AddProducts/>} />
      <Route path='nastenka' element={<Dashboard/>} />
      </Route>
    
      <Route path='prihlaseni' element={<Login/> } />
      <Route path='registrace' element={<Singup/> } />

      

    </Routes>
  )
}

export default Routers
