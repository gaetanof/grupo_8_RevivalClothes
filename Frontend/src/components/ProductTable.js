import Table from 'react-bootstrap/Table';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import RowTableProducts from './RowTableProducts';

function ProductTable() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const products = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/api/products/pages?page=`);
                setProducts(response.data.data)
                console.log(response.data)
            } catch (error) {
                console.log(error);
            }
        };
        products();
    }, [])
    return (
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
    );
}

export default ProductTable;