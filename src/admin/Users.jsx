import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import useGetData from '../custom-hooks/useGetData'
import {doc, deleteDoc} from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import '../styles/admin/users.css'

const Users = () => {
  const {data: usersData, loading} = useGetData('users');

  const deleteUser = async id => {
    await deleteDoc(doc(db, 'users', id));
    toast.success('uživatel byl smazán')
  };
  return (
    <section className='all__users'>
      <Container>
        <Row>
          <Col lg='12'><h4 className='fw-bold'>Uživatelé</h4></Col>
          <Col lg='12' className='pt-5'></Col>
          <table className="table table__users">
            <thead>
              <tr>
                <th>Obrázek</th>
                <th>Jméno</th>
                <th>Email</th>
                <th>Akce</th>
              </tr>
            </thead>
            <tbody>
              {
                loading ? <h4 className='pt-5 fw-bold'>Načítání....</h4>
                : usersData?.map(user => (
                  <tr key={user.uid}>
                    <td><img src={user.photoURL} alt="" /></td>
                    <td>{user.displayName}</td>
                    <td>{user.email}</td>
                    <td>
                    <i className="ri-delete-bin-6-fill" onClick={() => {deleteUser(user.id)}}></i>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </Row>
      </Container>
    </section>
  )
}

export default Users