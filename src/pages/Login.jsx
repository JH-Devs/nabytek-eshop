import React, {useState} from 'react'
import Helmet from '../components/helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import { motion } from 'framer-motion'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase.config'
import { toast } from 'react-toastify'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signIn = async (e)=> {
    e.preventDefault()
    setLoading(true)

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      console.log(user)
      setLoading(false)
      toast.success('přihlášení proběhlo úspěšně')
      navigate('/pokladna')
      
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
      
    }
  }

  return (
    <Helmet title='Přihlášení'>
      <section className='login__section'>
        <Container>
          <Row>
            {
              loading? <Col lg='12' className='text-center'><h5 className='fw-bold'>Načítání.....</h5></Col>
              :
              <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold fmb-4'>Přihlášení</h3>
              <Form className="auth__form" onSubmit={signIn}>
                <FormGroup>
                  <input type="email" placeholder='emailová adresa' value={email} onChange={e=> setEmail(e.target.value)} required />
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='heslo' value={password} onChange={e=> setPassword(e.target.value)} required/>
                </FormGroup>
                <motion.button type='submit' whileTap={{scale:1.2}} className="buy__btn auth__btn"> přihlásit</motion.button>
                <p>Nemáte zde ještě účet? <Link to='/registrace'>registrace</Link></p>
              </Form>
            </Col>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login
