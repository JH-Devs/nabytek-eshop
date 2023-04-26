import React, {useState} from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import '../styles/admin/addProducts.css'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import {db, storage } from '../firebase.config'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState('');
  const [enterCode, setEnterCode] = useState('');
  const [enterShortDesc, setEnterShortDesc] = useState('');
  const [enterDescription, setEnterDescription] = useState('');
  const [enterCategory, setEnterCategory] = useState('');
  const [enterPrice, setEnterPrice] = useState('');
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addProduct = async(e) => {
    e.preventDefault();
    setLoading(true);

    // přidání produktu do firebase
    try {
        const docRef = await collection(db, 'products')

        const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`)

        const uploadTask = uploadBytesResumable(storageRef, enterProductImg)
        uploadTask.on(() => {
          toast.error('obrázek nebyl nahrán')
        }, () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc (docRef, {
              title: enterTitle,
              code: enterCode,
              shortDesc: enterShortDesc,
              description: enterDescription,
              category: enterCategory,
              price: enterPrice,
              imgUrl: downloadURL,
            } );
          });
        }
        );
        setLoading(false) 
      toast.success('produkt byl přidán');
      navigate('/nastenka/vsechny-produkty');
      
    } catch (err) {
      setLoading(false)
      toast.error('chyba! produkt nebyl přidán');
    }
    
  };
  return (
    <section className='add__products'>
      <Container>
        <Row>
          <Col lg='12'>
          {
            loading ? <h4 className='py-4'>Načítání.....</h4> :
            <>
            <h4 className='mb-5'>Přidat produkt</h4>
          <Form onSubmit={addProduct}>
            <FormGroup className="form__group">
              <span className='add__title '>Název produktu</span>
              <input type="text" value={enterTitle} onChange={e => setEnterTitle(e.target.value)} required />
            </FormGroup>
            <FormGroup className="form__group">
              <span className='add__title '>Kód produktu</span>
              <input type="text" value={enterCode} onChange={e => setEnterCode(e.target.value)} required />
            </FormGroup>
            <FormGroup className="form__group">
              <span className='add__title'>Krátký popis</span>
              <textarea type="text" value={enterShortDesc}  onChange={e => setEnterShortDesc(e.target.value)} />
            </FormGroup>
            <FormGroup className="form__group">
              <span className='add__title'>Podrobný popis</span>
              <textarea rows={5} type="text" value={enterDescription}  onChange={e => setEnterDescription(e.target.value)}/>
            </FormGroup>
            <div className='d-flex align-items-center justify-content-between gap-5'>
            <FormGroup className="form__group w-50">
              <span className='add__title'>Cena (Kč)</span>
              <input type="number" value={enterPrice}  onChange={e => setEnterPrice(e.target.value)} required/>
            </FormGroup>
            <FormGroup className="form__group w-50">
              <span className='add__title'>Kategorie</span>
              <select className='w-100 p-2' value={enterCategory}  onChange={e => setEnterCategory(e.target.value)}>
                <option value="Novinky">Novinky</option>
                <option value="Výprodej">Výprodej</option>
                <option value="Populární">Populární</option>
                <option value="Stoly">Stoly</option>
                <option value="Skříně">Skříně</option>
                <option value="Komody">Komody</option>
              </select>
            </FormGroup>
            </div>
            <div>
            <FormGroup className="form__group">
              <span className='add__title'>Hlavní obrázek</span>
              <input type="file"  onChange={e => setEnterProductImg(e.target.files[0])} required/>
            </FormGroup>
            </div>
            <motion.button whileTap={{scale: 1.2}} className='buy__btn' type='submit'>Přidat produkt</motion.button>
          </Form>
            </>
          }
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddProducts