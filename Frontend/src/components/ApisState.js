import axios from "axios";
import React, { useState, useRef, useEffect } from "react";

function ApisState() {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const lista = useRef();

    useEffect(() => {
        const products = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/products');
                setProducts(response.data.data)
                console.log(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        products();

    }, [])

    useEffect(() => {
        const users = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/users');
                setUsers(response.data.data)
            } catch (error) {
                console.log(error);
            }
        };

        users();

    }, [])

    const click = () => {
        lista.current.style.background = 'red'
    }


    return (
        <>  
            <h2>Productos</h2>
            <ul ref={lista} onClick={click}>
            {products.map((el, i) => (
                <li key={el + i}>{el.category}</li>
            ))}
            </ul>
            
            <h2>Usuarios</h2>
            <ul>
            {users.map((el, i) => (
                <li key={el + i}>{el.full_name}</li>
            ))}
            </ul>
        </>
    )
};

export default ApisState;