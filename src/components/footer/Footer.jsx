import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3' md='6'>
            <div>
            <h1>Nábytek - eshop</h1>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quos aut optio voluptatibus mollitia nesciunt explicabo cupiditate vel quidem consequuntur?
            </p>
            <div className='social__icon'>
              <Link to='#' className='facebook'><i class="ri-facebook-circle-fill"></i></Link>
              <Link to='#' className='instagram'><i class="ri-instagram-fill"></i></Link>
              <Link to='#' className='youtube'><i class="ri-youtube-fill"></i></Link>
              <Link to='#' className='pinterest'><i class="ri-pinterest-fill"></i></Link>
            </div>
          </Col>
          <Col lg='2' md='6' >
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Informace</h4>
              <ListGroup className='mb-3 mt-4'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Kontakt</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Obchodní podmínky</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'> 
                  <Link to='#'>Reklamační řád</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>GDPR</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2' md='6'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Top kategorie</h4>
              <ListGroup className='mb-3 mt-4'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Komody</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Skříně</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'> 
                  <Link to='#'>Jídelní stoly</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Židle</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2' md='6'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Užitečné odkazy</h4>
              <ListGroup className='mb-3 mt-4'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/kosik'>Košík</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'> 
                  <Link to='/registrace'>Registrace</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/prihlaseni'>Přihlášení</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3' md='6'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Kontakt</h4>
              <ListGroup className='mb-3 mt-4' >
                <ListGroupItem className='ps-0 border-0' id='footer__contact'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>Adresa ulice 1, 111 11 Město</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0' id='footer__contact'>
                  <span><i class="ri-phone-line"></i></span>
                  <p>+420 123 456 789</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0' id='footer__contact'> 
                  <span><i class="ri-mail-line"></i></span>
                  <p>info@email.cz</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <hr/>
          <Col lg='12' className="copy__footer">
            <p>  {year} © Nábytek-eshop. Všechna práva vyhrazena. </p>
            <span className='design'>Vytvořeno <Link to='https://jh-design.cz'>JH-design.cz</Link></span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer