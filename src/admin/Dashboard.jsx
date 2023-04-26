import React from 'react'
import '../styles/admin/dashboard.css'
import {Container, Row, Col} from 'reactstrap'
import useGetData from '../custom-hooks/useGetData'

const Dashboard = () => {
  const {data: products} = useGetData('products')
  const {data: users} = useGetData('users')
  return (
    <section className='dashboard'>
      <Container>
        <Row>
          <Col className="lg-3">
            <div className='revenue__box'>
              <h5>Celkové prodeje</h5>
              <span>50 853 Kč</span>
            </div>
          </Col>
          <Col className="lg-3">
          <div className='orders__box'>
              <h5>Objednávky</h5>
              <span>29</span>
            </div>
          </Col>
          <Col className="lg-3">
          <div className='products__box'>
              <h5>Produkty</h5>
              <span>{products.length}</span>
            </div>
          </Col>
          <Col className="lg-3">
          <div className='users__box'>
              <h5>Uživatelé</h5>
              <span>{users.length}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Dashboard