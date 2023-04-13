import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../../routers/Routers'

import AdminNav from '../../admin/AdminNav'
import AdminFooter from '../../admin/AdminFooter'
import { useLocation } from 'react-router-dom'

const Layout = () => {

  const location = useLocation();
  return (
    <>
    { location.pathname.startsWith('/nastenka') ? <AdminNav /> :  <Header />}
   
    <div>
        <Routers />
    </div>
    { location.pathname.startsWith('/nastenka') ? <AdminFooter /> :  <Footer />}
    </>
    )
}

export default Layout