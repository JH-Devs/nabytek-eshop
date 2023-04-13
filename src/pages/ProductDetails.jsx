import React,{useState, useRef, useEffect} from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/helmet/Helmet' 
import CommonSection from '../components/UI/CommonSection'
import '../styles/product-details.css'
import { motion } from 'framer-motion'
import ProductList from '../components/UI/ProductList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import {toast} from 'react-toastify'

const ProductDetails = () => {

  const [tab, setTab] = useState('desc');
  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const [rating, setRating] = useState(null);
  const dispatch = useDispatch();

  const {id} = useParams();
  const product = products.find(item => item.id === id);

  const {imgUrl, productName,category, price, avgRating, reviews, description, shortDesc } = product

  const relatedProducts = products.filter(item => item.category===category);

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    console.log(reviewObj);
    toast.success('recenze přidána');
  };
  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image:imgUrl,
      productName,
      price,
    })
    );
    toast.success('Přidáno do košíku');
  };

  useEffect(() => {
    window.scrollTo(0,0);
  }, [product]);

  return (
  <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='6'>
              <img className='product__img' src={imgUrl} alt={productName}/>
            </Col>
            <Col lg='6'>
              <div className="product__details">
                <h2>{productName}</h2>
                <span className='category__details mb-4'>{category}</span>
                <div className="product__rating d-flex align-items-center gap-5 mb-4">
                  <div>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-half-s-line"></i></span>
                  </div>
                  <p className='mt-2'>(<span>{avgRating}</span>) hodnocení</p>
                </div>
               <span className='product__price'>{price} Kč</span>
                <p className='mt-3'>{shortDesc}</p>
                <motion.button whileTap={{scale:1.2}} className="buy__btn" onClick={addToCart}>koupit</motion.button>
              </div>
            </Col>
          </Row>
          {/* dodělat onClick na obrázek aby byl zoom*/}
          <Row  lg='12' className='product__mini'>
            <Col lg='2'><img src={imgUrl} alt="" /></Col>
            <Col lg='2'><img src={imgUrl} alt="" /></Col>
            <Col lg='2'><img src={imgUrl} alt="" /></Col>
            <Col lg='2'><img src={imgUrl} alt="" /></Col>
            </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6 className={`${tab==='desc' ? 'active__tab' : ""}`} onClick={() => setTab('desc')}>Podrobný popis</h6>
                <h6 className={`${tab==='rev' ? 'active__tab' : ""}`} onClick={() => setTab('rev')}>Hodnocení ({reviews.length})</h6>
              </div>
              {
                tab === 'desc' ? ( <div className="tab__content mt-4">
                <p>{description}</p>
              </div> 
              ) : (
                <div className='product__review mt-5'>
                  <div className="review__wrapper">
                    <ul>
                      {
                        reviews?.map((item, index)=> (
                          <li key={index} className='mb-4'>
                            <h6>Uživatel jméno</h6>
                            <span>{item.rating} (hodnocení)</span>
                          <p>{item.text}</p>
                          </li>
                        ))
                      }
                    </ul>
                    <div className="review__form">
                      <h4>Přidat recenzi</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form__group">
                          <input type="text" placeholder='vaše jméno' ref={reviewUser} required />
                        </div>
                        <div className="form__group d-flex align-items-center gap-5 rating__group">
                          <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(1)}><i class="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(2)}><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(3)}><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(4)}><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(5)}><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i></motion.span>
                        </div>
                        <div className="form__group">
                          <textarea rows={4} type="text" placeholder='text recenze' ref={reviewMsg} required/>
                        </div>
                        <motion.button whileTap={{scale:1.2}} type='submit' className='buy__btn'>odeslat</motion.button>
                      </form>
                    </div>
                  </div>
                </div>
                )}
             
            </Col>
            <Col lg='12' className='mt-5'>
              <h2 className='related__title'> Mohlo by se vám líbit</h2>
            </Col>
            <ProductList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetails
