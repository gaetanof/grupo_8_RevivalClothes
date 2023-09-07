import Table from 'react-bootstrap/Table';
// import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
import React, { useState, useEffect } from 'react';

function StripedColumnsExample() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const products = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/products');
                setProducts(response.data.data)
                console.log(response.data.data)
            } catch (error) {
                console.log(error);
            }
        };
        products();
    }, [])
    return (
        <Table striped="columns">
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Precio</th>
                    <th>Talla</th>
                    <th>Genero</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, i) => {
                    <tr key={product.title + i}>
                        <td key={product.title + i}>1</td>
                        <td key={product.title + i}>Mark</td>
                        <td key={product.title + i}>Otto</td>
                        <td key={product.title + i}>@mdo</td>
                    </tr>
                })}
            </tbody>
        </Table>
    );
}

export default StripedColumnsExample;