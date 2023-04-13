import React from 'react'
import '../styles/cart.css'
import Helmet from '../components/helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import {cartActions} from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {

  const cartItems = useSelector(state =>state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  return (
    <Helmet title='Nákupní košík'>
      <CommonSection title='Nákupní košík' />
      <section className="cart__section">
        <Container>
          <Row>
            <Col lg='9'>
              {
                cartItems.length === 0 ? <h2 className='fs-4 text-center'>Váš košík je prázdný</h2> :
                <table className="table bordered">
                <thead>
                  <tr>
                    <th>Kód</th>
                    <th>Obrázek</th>
                    <th>Název</th>
                    <th>Cena / ks</th>
                    <th>Množství</th>
                    <th>Smazat</th>
                  </tr>
                </thead>
                <tbody>
                 {
                  cartItems.map((item, index) => (
                   <Tr item={item} key={index} />
                  ))
                 }
                </tbody>
              </table>
              }
            </Col>
            <Col lg='3'>
              <div>
                <h6 className='d-flex align-items-center justify-content-between'>Celkem
                <span className='fs-4 fw-bold'>{totalAmount} Kč</span>
                </h6>
          
              </div>
              <p className='fs-6 mt-2'>DPH a doprava bude připočítaná v pokladně</p>
              <div>
                <button className='buy__btn w-100 btn__shopping'><i class="ri-reply-fill"></i><Link to='/shop'>pokračovat v nákupu</Link></button>
                <button className='buy__btn w-100 mt-3'><Link to='/pokladna'>Pokladna</Link></button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
const Tr = ({item}) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }
  return (
    <tr >
    <td>{item.code}</td>
    <td><img src={item.imgUrl} alt="" /></td>
    <td>{item.productName}</td>
    <td>{item.price} Kč</td>
    <td>{item.quantity} x </td>
    <td><motion.i whileTap={{scale:1.2}} onClick={deleteProduct} class="ri-delete-bin-5-line"></motion.i></td>
  </tr>
  )

}

export default Cart
