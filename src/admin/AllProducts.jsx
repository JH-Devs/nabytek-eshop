import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../styles/admin/allProducts.css'
import { db } from '../firebase.config'
import {doc, deleteDoc} from 'firebase/firestore'
import useGetData from '../custom-hooks/useGetData'
import { toast } from 'react-toastify'

const AllProducts = () => {
  const {data:productsData, loading} = useGetData('products');

  const deleteProduct = async id => {
    await deleteDoc(doc(db, 'products', id));
    toast.success('produkt byl smazán')
  };

 
  return (
  <section className='all__products'>
    <Container>
      <Row>
      <Col lg='12'><h4 className='fw-bold'>Produkty</h4></Col>
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
            { loading ? (
              <h4 className='py-5 text-center fw-bold'>Načítání.....</h4>
              ) : (
                productsData.map(item => (
                  <tr key={item.id}>
                  <td>{item.code}</td>
                  <td><img src={item.imgUrl} alt="" /></td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.price} Kč</td>
                  <td>
                      <i className="ri-delete-bin-6-fill" onClick={() => {deleteProduct(item.id)}}></i>
                  </td>
                </tr>
                ))
                )}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
    </section>
  )
}

export default AllProducts