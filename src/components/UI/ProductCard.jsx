import React from 'react'
import { motion } from 'framer-motion'
import '../../styles/product-card.css'
import { Col } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
import {  toast } from 'react-toastify';

const ProductCard = ({item}) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      code: item.code,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    })
    );
    toast.success('Přidáno do košíku')
  };
  const navigateToDetail = () => {
    navigate(`/shop/${item.id}`);
  }

  return (
    <Col lg='3' md='4' className='mb-2'>
    <div className='product__item' >
        <div className="product__img" onClick={navigateToDetail}>
            <motion.img whileHover={{scale: 0.9}} src={item.imgUrl}  alt='' />
        </div>
        <div className='p-2 product__info'>
        <h3 className="product__name"><Link to={`/shop/${item.id}`} >{item.productName}</Link></h3>
        <span  className='text-center d-block'>{item.category}</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-3">
            <span className="price">{item.price} Kč</span>
            <motion.span whileTap={{scale:1.2}} onClick={addToCart}><i class="ri-shopping-cart-2-fill"></i></motion.span>
        </div>
    </div>
    </Col>
  )
}

export default ProductCard