import React, {useState} from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import '../styles/shop.css'
import products from '../assets/data/products'
import ProductList from '../components/UI/ProductList'

const Shop = () => {

  const [productsData, setProductsData] = useState(products);
  const handleFilter = (e) =>{
    const filterValue = e.target.value
    if(filterValue==='novinky'){
      const filteredProducts = products.filter(item => item.category==='Novinky'
      );
      
      setProductsData(filteredProducts);
    }
    if(filterValue==='vyprodej'){
      const filteredProducts = products.filter(item => item.category==='Výprodej'
      );
      
      setProductsData(filteredProducts);
    }
    if(filterValue==='stoly'){
      const filteredProducts = products.filter(item => item.category==='Stoly'
      );
      
      setProductsData(filteredProducts);
    }
    if(filterValue==='skrine'){
      const filteredProducts = products.filter(item => item.category==='Skříně'
      );
      
      setProductsData(filteredProducts);
    }
    if(filterValue==='komody'){
      const filteredProducts = products.filter(item => item.category==='Komody'
      );
      
      setProductsData(filteredProducts);
    }
 
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value 
    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()));
    setProductsData(searchedProducts);
  }

  return (
    <Helmet title=' Shop'>
      <CommonSection title='Produkty'/>
      <section>
      <Container>
        <Row>
          <Col lg='3' md='3'>
            <div className="filter__widget">
              <select onChange={handleFilter}>
                <option>Kategorie</option>
                <option value='novinky'>Novinky</option>
                <option value='vyprodej'>Výprodej</option>
                <option value='stoly'>Stoly</option>
                <option value='skrine'>Skříně</option>
                <option value='komody'>Komody</option>
              </select>
            </div>
          </Col>
          <Col lg='3' md='3'>
          <div className="filter__widget">
              <select>
                <option>řadit podle:</option>
                <option value='vzestupne'>cena: vzestupně</option>
                <option value='sestupne'>cena: sestupně</option>
              </select>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="search__box">
              <input type='text' placeholder='Hledat...' onChange={handleSearch} />
              <span><i class="ri-search-line"></i></span>
            </div>
          </Col>
        </Row>
      </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            {
              productsData.length === 0 ? <h1 className='text-center fs-4 no-products'>žádné produkty ....</h1>
              : <ProductList data={productsData}/>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop
