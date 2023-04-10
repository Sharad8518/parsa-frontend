import { useQuery } from '@apollo/client';
import React from 'react'
import {Button, Container, Spinner, Table} from 'react-bootstrap';
import { FaTrashAlt, FaUserAltSlash, FaUserCheck, FaUserSlash } from 'react-icons/fa';
import { GET_ALL_USERS } from '../../graphql/Query';
import Moment from 'react-moment';

export default function AllUsers() {

    const {data , loading} = useQuery(GET_ALL_USERS)
console.log("datauser",data)

    return (
        <>
        <Container fluid>
        <h4 style={{textAlign:'center',color:'#000000'}}>All Users</h4>
            <Table style={{marginTop:15}} bordered hover responsive>
                <thead style={{borderBottom:'2px solid #000'}}>
                    <tr>
                        <th>First Name</th>
                        <th>Mobile No.</th>
                        <th>Email</th>
                        <th>Regitration Date</th>
                        <th>Block</th>
                        <th>Unblock</th>
                    </tr>
                </thead>
                <tbody>
                {
                                loading ?
                                    <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner> :
                                    data && data.getUser1.slice().reverse().map(userData =>
                                        <tr>

                                            <td>{userData.fName} {userData.lName}</td>
                                            <td>{userData.contact}</td>
                                            <td>{userData.email}</td>
                                            <td><Moment format="DD/MM/YYYY hh:mm a">{userData.createdDateTime}</Moment></td>
                                            <td><Button className='mx-auto d-block' style={{backgroundColor:'#c0392b',border:'none',}}><FaUserAltSlash style={{ color: '#ffffff' }}/></Button></td>
                                            <td><Button className='mx-auto d-block' style={{backgroundColor:'#2ecc71',border:'none',}}><FaUserCheck style={{ color: '#ffffff' }}/></Button></td>
                                              
                                        </tr>
                                    )
                            }
                </tbody>
            </Table>
            </Container>
        </>
    )
}
