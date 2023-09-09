import Table from 'react-bootstrap/Table';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import RowTableProducts from './RowTableProducts';
import Pagination from 'react-bootstrap/Pagination';

function ProductTable() {
    const [products, setProducts] = useState([]);
    const [inforPages, setiInforPages] = useState([]);
    const [itemsPagination, setItemsPagination] = useState([]);

    const getProducts = async (page) => {
        try {
            const response = await axios.get(`http://localhost:5001/api/products/pages?page=${page}`);
            setProducts(response.data.data)
            setiInforPages(response.data.totalPages)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getProducts(1);
    }, [])

    useEffect(() => {
        let items = []
        for (let i = 1; i <= inforPages; i++) {
            items.push(
                <Pagination.Item key={i} onClick={(e) => { getProducts(parseInt(e.target.text)); }}>
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
                        <th>Titulo</th>
                        <th>Precio</th>
                        <th>Talla</th>
                        <th>Genero</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((el, i) => (
                        <RowTableProducts key={el.title + i} col1={el.title} col2={el.price} col3={el.size} col4={el.genre} id={el.id} />
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