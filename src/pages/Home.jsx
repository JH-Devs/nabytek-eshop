import React,{useState, useEffect} from 'react'
import Helmet from '../components/helmet/Helmet'
import {Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from '../services/Services'
import ProductList from '../components/UI/ProductList'
import products from '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/UI/Clock'

const Home = () => {
  const [trendingProducts, setTredingProducts] = useState([]);
  const [bestSales, setBestSales] = useState([]);
  const year = new Date().getFullYear();
  const [newArrivals, setNewArrivals] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(()=> {
    const filteredTrendingProducts = products.filter(item => item.category === 'Trendy produkty'
    );
    const filteredBestSales = products.filter(item => item.category === 'Výprodej'
    );
    const filteredNewArrivals = products.filter(item => item.category === 'Novinky'
    );
    const filteredPopularProducts = products.filter(item => item.category === 'Populární'
    )
    setTredingProducts(filteredTrendingProducts);
    setBestSales(filteredBestSales);
    setNewArrivals(filteredNewArrivals);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
   <Helmet title={''}>
    <section className='hero__section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">Oblíbené produkty v {year}</p>
              <h2>Vytvořte si dokonalý  a moderní domov</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id excepturi ratione quis laborum consequatur sapiente voluptates accusantium, ea assumenda voluptas!</p>
              <motion.button whileTap={{scale:1.2}} className='buy__btn'><Link to='/shop'>Prohlédnout produkty</Link></motion.button>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <img src={heroImg} alt='' />
          </Col>
        </Row>
      </Container>
    </section>
    <Services />
    <section className='trending__products'>
      <Container>
         <Row>
          <Col lg='12'className='text-center'>
            <h2 className='section__title'>Trendy produkty</h2>
          </Col>
          <ProductList data={trendingProducts}/>
         </Row>
      </Container>
    </section>
    <section className="best__sales">
    <Container>
         <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'>Výprodejové ceny</h2>
          </Col>
          <ProductList data={bestSales} />
         </Row>
      </Container>
    </section>
    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="clock__top-content">
              <h4 className='text-white fs-6 mb-2'>Limitovaná nabídka</h4>
              <h3>Luxusní křesla</h3>
            </div>
            <Clock/>
            <motion.button whileTap={{scale: 1.2}} className='buy__btn store__btn'><Link to='/shop'>Nakupovat</Link></motion.button>
          </Col>
          <Col lg='6' md='6' className='text-end'>
            <img  src={counterImg} alt='' />
          </Col>
        </Row>
      </Container>
    </section>
    <section className="new__arrivals">
      <Container>
        <Row>
          <Col lg='12' className='text-center '>
            <h2 className='section__title'>Novinky</h2>
          </Col>
          <ProductList data={newArrivals} />
        </Row>
      </Container>
    </section>
    <section className="popular_products">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className="section__title">Populární v komodách</h2>
          </Col>
          <ProductList data={popularProducts} />
        </Row>
      </Container>
    </section>
   </Helmet>
  )
}

export default Home
