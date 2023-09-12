import Table from 'react-bootstrap/Table';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import RowTableCart from './RowTableCarts';
import Pagination from 'react-bootstrap/Pagination';

function ProductTable() {
    const [cart, setCart] = useState([]);
    const [inforPages, setiInforPages] = useState([]);
    const [itemsPagination, setItemsPagination] = useState([]);

    const getCart = async (page) => {
        try {
            const response = await axios.get(`http://localhost:5001/api/carts/pages?page=${page}`);
            setCart(response.data.data)
            setiInforPages(response.data.totalPages)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getCart(1);
    }, [])

    useEffect(() => {
        let items = []
        for (let i = 1; i <= inforPages; i++) {
            items.push(
                <Pagination.Item key={i} onClick={(e) => { getCart(parseInt(e.target.text)); }}>
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
                        <th>ID</th>
                        <th>Metodo de pago</th>
                        <th>Metodo de envio</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((el, i) => (
                        <RowTableCart key={el.id + i} col1={el.id} col2={el.paymentMethod} col3={el.shippingMethod} col4={el.total} id={el.id} />
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

export default ProductTable;