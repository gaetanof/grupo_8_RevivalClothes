import React, { useState, useEffect } from "react";
import CardMovies from "./CardMovies";
import axios from "axios";

let a = {
    title: 'Movies in Data Base',
    color: 'primary',
    total: 21,
    icon: 'film'
}
let b = {
    title: 'Total awards',
    color: 'success',
    total: 79,
    icon: 'award'
}
let c = {
    title: 'Actors quantity',
    color: 'warning',
    total: 49,
    icon: 'user'
}

let arr = [a, b, c]

function ContentRowMovies() {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);

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
                console.log(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        users();
    }, [])

    useEffect(() => {
        const user = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/api/0b419a21-03d8-4e9f-a9ed-c14569cdd9a0/users`);
                setUser(response.data.data)
                console.log(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        user();
    }, [])

    return (
        <>
            {arr.map((el, i) => {
                return <CardMovies {...el} key={el + i} />
            })}
        </>
    )
};

export default ContentRowMovies;