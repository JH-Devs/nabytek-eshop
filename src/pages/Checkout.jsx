import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/checkout.css'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const totalQty = useSelector(state=> state.cart.totalQuantity);
  const totalAmount = useSelector(state=>state.cart.totalAmount );
  return (
    <Helmet title='Pokladna'>
      <CommonSection title='Pokladna'/>
      <Container>
        <Row>
          <Col lg='8'>
            <h6 className='mb-4 fw-bold fs-5'>Doručovací adresa</h6>
            <Form className='billing__form'>
              <FormGroup className='form__group'>
                <input className='w-50' type="text" placeholder='Jméno a příjmení' required />
              </FormGroup>
              <FormGroup className='form__group'>
                <input className='w-50' type="email" placeholder='Email' required  />
              </FormGroup>
              <FormGroup className='form__group'>
                <input className='w-50' type="number" placeholder='telefonní číslo ' required  />
              </FormGroup>
              <FormGroup className='form__group'>
                <input className='w-50' type="text" placeholder='Ulice a číslo popisné' required />
              </FormGroup>
              <FormGroup className='form__group'>
                <input className='w-50' type="text" placeholder='Město' required/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input className='w-50' type="number" placeholder='PSČ' required />
              </FormGroup>
              <FormGroup >
              <select className='w-50 p-2 form__group country__select' >
                <option>Země</option>
                <option >Česká republika</option>
                <option >Slovensko</option>
              </select>
              </FormGroup>
              <FormGroup >
                <textarea rows={2} placeholder='Poznámka k objednávce' className='w-50' />
              </FormGroup>
            </Form>
          </Col>
          <Col lg='4'>
            <div className="checkout__cart">
              <h6>Celkové množství: <span>{totalQty} ks</span></h6>
              <h6>Mezisoučet:<span>{totalAmount} Kč</span></h6>
              <h6>Doručení:<span> zdarma</span></h6>
              <h4 className='total__price'>Celková cena:<span>{totalAmount} Kč</span></h4>
              
            </div>
            <button className='buy__btn auth__btn w-100 mb-5'>Zaplatit</button>
          </Col>
        </Row>
      </Container>
    </Helmet>
  )
}

export default Checkout
