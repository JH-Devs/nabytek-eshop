
import React, {useRef,useEffect} from 'react'
import './header.css'
import { Container, Row } from 'reactstrap'
import logo from '../../assets/images/logo.png'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import userIcon from '../../assets/images/user_icon.png'
import {motion} from 'framer-motion'
import { useSelector } from 'react-redux'
import useAuth from '../../custom-hooks/useAuth'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { toast } from 'react-toastify'

const nav__links = [
  {
    path: 'home',
    display:<i class="ri-home-8-line fs-5 d-flex"></i>
  },
  {
    path: 'shop',
    display:'Shop'
  },
  {
    path: 'kosik',
    display:'Nákupní košík'
  },

];

const Header = () => {

  const navigate = useNavigate();
  const headerRef = useRef(null);
  const totalQuantity = useSelector(state=> state.cart.totalQuantity);
  const profileActionRef = useRef(null);

  const menuRef = useRef(null);
  const {currentUser} = useAuth();

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 880 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };
  const logout = () => {
    signOut(auth).then(() => {
      toast.success('odhlášení bylo úspěšné')
      navigate('/home')
    }).catch(err=> {
      toast.error(err.message)
    })
  }
  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  });
  const menuToggle = () => menuRef.current.classList.toggle('active__menu');

  const navigateToCart = () => {
    navigate('/kosik');
  };
  const toggleProfileActions = () => profileActionRef.current.classList.toggle('show__profileActions');

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav__wrapper'>
            <div className='logo'>
              <img src={logo} alt='logo'/>
              <div>
                <h1>Nábytek - eshop</h1>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
               {
                nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                  <NavLink id='link' to={item.path} className={(navClass) => navClass.isActive  ? 'nav__active' : ''}>{item.display}</NavLink>
                </li>
                ))
               }
              </ul>
            </div>
            <div className="nav__icons">
              <span className='fav__icon'>
                <i class="ri-heart-fill"></i>
                <span className='badge'>0</span>
              </span>
              <span className='cart__icon' onClick={navigateToCart}>
                <i class="ri-shopping-cart-2-fill"></i>
                <span className='badge'>{totalQuantity}</span>
                </span>
              <div className='profile'>
                <motion.img 
                whileTap={{scale: 1.2}} 
                src={currentUser  ? currentUser.photoURL: userIcon} 
                alt='' 
                onClick={toggleProfileActions} />
                <div 
                className="profile__actions" 
                ref={profileActionRef} 
                onClick={toggleProfileActions}
                >
                  {
                    currentUser ? ( 
                    <span onClick={logout}>odhlásit se</span>
                    ) : (
                    <div className='d-flex align-items-center justify-content-center flex-column'>
                      <Link to='/registrace'>Registrace</Link>
                      <Link to='/prihlaseni'>Přihlášení</Link>
                      <Link to='/nastenka'>Admin sekce</Link>
                    </div>
                  )}
                </div>
                </div>
                <div className='mobile__menu'>
              <span><i class="ri-menu-line" onClick={menuToggle}></i></span>
            </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header