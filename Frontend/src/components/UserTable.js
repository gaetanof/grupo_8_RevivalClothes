import Table from 'react-bootstrap/Table';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import RowTableUsers from './RowTableUsers';

function UserTable() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const users = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/users');
                setUsers(response.data.data)
                console.log(response.data.data)
            } catch (error) {
                console.log(error);
            }
        };
        users();
    }, [])
    return (
        <Table hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apodo</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                {users.map((el, i) => (
                    <RowTableUsers key={el.id + i} col1={el.id} col2={el.full_name} col3={el.user_name} col4={el.email} id={el.id} />
                ))}
            </tbody>
        </Table>
    );
}

export default UserTable;