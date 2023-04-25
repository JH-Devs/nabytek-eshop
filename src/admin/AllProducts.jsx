import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../styles/admin/allProducts.css'
import productImg from '../assets/images/arm-chair-01.jpg'



const AllProducts = () => {
  return (
  <section className='all__products'>
    <Container>
      <Row>
        <Col lg='12'>
          <table className='table table__products'>
            <thead>
              <tr>
                <th>Kód</th>
                <th>Obrázek</th>
                <th>Název</th>
                <th>Kategorie</th>
                <th>Cena</th>
                <th>Akce</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>v-001</td>
                <td><img src={productImg} alt="" /></td>
                <td>Arm chair židle</td>
                <td>Židle</td>
                <td>999 Kč</td>
                <td>
                  <div className='action'>
                    <i className="ri-eye-fill"></i>
                    <i className="ri-pencil-fill"></i>
                    <i className="ri-delete-bin-6-fill"></i>
                </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
    </section>
  )
}

export default AllProducts