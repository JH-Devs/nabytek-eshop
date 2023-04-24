import React, {useState} from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import '../styles/admin/addProducts.css'
import { motion } from 'framer-motion'

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState('');
  const [enterShortDesc, setEnterShortDesc] = useState('');
  const [enterDescription, setEnterDescription] = useState('');
  const [enterCategory, setEnterCategory] = useState('');
  const [enterPrice, setEnterPrice] = useState('');
  return (
    <section className='add__products'>
      <Container>
        <Row>
          <Col lg='12'>
          <h4 className='mb-5'>Přidat produkt</h4>
          <Form>
            <FormGroup className="form__group">
              <span className='add__title '>Název produktu</span>
              <input type="text" />
            </FormGroup>
            <FormGroup className="form__group">
              <span className='add__title'>Krátký popis</span>
              <input type="text" />
            </FormGroup>
            <FormGroup className="form__group">
              <span className='add__title'>Podrobný popis</span>
              <input type="text" />
            </FormGroup>
            <div className='d-flex align-items-center justify-content-between gap-5'>
            <FormGroup className="form__group w-50">
              <span className='add__title'>Cena (Kč)</span>
              <input type="number" />
            </FormGroup>
            <FormGroup className="form__group w-50">
              <span className='add__title'>Kategorie</span>
              <select className='w-100 p-2'>
                <option value="novinky">Novinky</option>
                <option value="vyprodej">Výprodej</option>
                <option value="stoly">Stoly</option>
                <option value="skrine">Skříně</option>
                <option value="komody">Komody</option>
              </select>
            </FormGroup>
            </div>
            <div>
            <FormGroup className="form__group">
              <span className='add__title'>Hlavní obrázek</span>
              <input type="file" />
            </FormGroup>
            <FormGroup className="form__group">
              <span className='add__title'>Druhý obrázek</span>
              <input type="file" />
            </FormGroup>
            <FormGroup className="form__group">
              <span className='add__title'>Třetí obrázek</span>
              <input type="file" />
            </FormGroup>
            </div>
            <motion.button whileTap={{scale: 1.2}} className='buy__btn'>Přidat produkt</motion.button>
          </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddProducts