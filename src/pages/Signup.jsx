import React,{useState} from 'react'
import Helmet from '../components/helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import { motion } from 'framer-motion'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore'
import { auth, storage,db } from '../firebase.config'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { toast } from 'react-toastify'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signup = async(e)=> {
    e.preventDefault();
      setLoading(true);
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;
      const storageRef = ref(storage, `images/${Date.now() + username}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on((error)=>{
        toast.error(error.message)
      }, ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadUrl)=> {
          // update user profile
          await updateProfile(user, {
            displayName: username,
            photoURL: downloadUrl
          });
          // store user data in firestore database
          await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            displayName: username,
            email,
            photoURL: downloadUrl,
          });
        });
      }
      );
      setLoading(false)
      toast.success('registrace byla úspěšná')
      navigate('/prihlaseni')
    } catch (error) {
      setLoading(false)
      toast.error('nastala neočekávaná chyba')
    }
  };

  return (
    <Helmet title='Registrace'>
    <section className='login__section'>
      <Container>
        <Row>
         {
          loading? <Col lg='12' className='text-center'><h5 className='fw-bold'>Načítání.....</h5></Col>
          :
          <Col lg='6' className='m-auto text-center'>
          <h3 className='fw-bold mb-4'>Registrace</h3>
          <Form className="auth__form" onSubmit={signup}>
          <FormGroup>
              <input type="text" placeholder='uživatelské jméno' required value={username} onChange={e=> setUsername(e.target.value)}/>
            </FormGroup>
            <FormGroup>
              <input type="email" placeholder='emailová adresa' required value={email} onChange={e=> setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <input type="password" placeholder='heslo (min 6 znaků)' required  value={password} onChange={e=> setPassword(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <input type="file" onChange={e=> setFile(e.target.files[0])} />
            </FormGroup>
            <div className='checkbox'>
            <input type="checkbox" name="" id=""  required/>
            <p>Souhlasím se zpracováním osobních údajů</p>
            </div>
            <motion.button type='submit' whileTap={{scale:1.2}} className="buy__btn auth__btn"> registrace</motion.button>
            <p>Máte tu už účet? <Link to='/prihlaseni'>přihlášení</Link></p>
          </Form>
        </Col>
         }
        </Row>
      </Container>
    </section>
  </Helmet>
  )
}

export default Signup