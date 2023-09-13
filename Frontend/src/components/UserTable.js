import Table from 'react-bootstrap/Table';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import RowTableUsers from './RowTableUsers';
import Pagination from 'react-bootstrap/Pagination';

function UserTable() {
    const [users, setUsers] = useState([]);
    const [inforPages, setiInforPages] = useState([]);
    const [itemsPagination, setItemsPagination] = useState([]);

    const getUsers = async (page) => {
        try {
            const response = await axios.get(`http://localhost:5001/api/users/pages?page=${page}`);
            setUsers(response.data.data)
            setiInforPages(response.data.totalPages)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getUsers(1);
    }, [])

    useEffect(() => {
        let items = []
        for (let i = 1; i <= inforPages; i++) {
            items.push(
                <Pagination.Item key={i} onClick={(e) => { getUsers(parseInt(e.target.text)); }}>
                    {i}
                </Pagination.Item>,
            );
        }
        setItemsPagination(items)
    }, [inforPages])

    return (
        <>
            <Table hover>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apodo</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((el, i) => (
                        <RowTableUsers key={el.id + i} col1={el.id} col2={el.full_name} col3={el.user_name} col4={el.image} col5={el.email} id={el.id} />
                    ))}
                </tbody>
            </Table>
            <div className="d-flex align-items-center justify-content-center">
                <Pagination>
                    <Pagination >{itemsPagination}</Pagination>
                </Pagination>
            </div>
        </>
    );
}

export default UserTable;