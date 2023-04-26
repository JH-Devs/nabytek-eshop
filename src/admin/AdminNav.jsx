import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import navImg from '../assets/images/logo.png'
import useAuth from '../custom-hooks/useAuth'
import '../styles/admin/admin-nav.css'
import { NavLink} from 'react-router-dom'


const admin__nav = [
    {
        display:'Nástěnka',
        path:'/nastenka'
    },
    {
        display:'Všechny produkty',
        path:'/nastenka/vsechny-produkty'
    },
    {
        display:'Přidat produkt',
        path:'/nastenka/pridat-produkt'
    },
    {
        display:'Uživatelé',
        path:'/nastenka/uzivatele'
    },
    {
        display:'Objednávky',
        path:'/nastenka/objednavky'
    },
]

const AdminNav = () => {

    const {currentUser} = useAuth();

  return (
    <>
    <header className='admin__header'>
        <div className="admin__nav-top">
            <Container>
                <div className='admin__nav-wrapper-top'>
                    <div className="logo">
                        <img src={navImg} alt="" />
                        <h2>Nábytek - eshop</h2>
                    </div>
                    <div className="search__box">
                        <input type="text" placeholder='Hledat.....' />
                        <span><i className='ri-search-line'></i></span>
                    </div>
                    <div className="admin__nav-top-right">
                        <span><i className='ri-notification-3-line'></i></span>
                        <span><i className='ri-settings-2-line'></i></span>
                        <img src={ currentUser && currentUser.photoURL} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    </header>
    <section className="admin__menu ">
        <Container>
            <Row>
             <div className="admin__navigation">
                <ul className="admin__menu-list">
                    {
                       admin__nav.map((item, index)=> (
                        <li className='admin__menu-item' key={index}>
                        <NavLink to={item.path}  className={(navClass) => navClass.isActive  ? 'nav__active' : ''}>{item.display} </NavLink>
                        </li>
                    ))
                    }
                </ul>
                <li className='logout' >Odhlásit se</li>
               </div>             
            </Row>
        </Container>
    </section>
    </>
  )
}

export default AdminNav