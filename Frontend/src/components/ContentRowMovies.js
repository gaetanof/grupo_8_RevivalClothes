import React, { useState, useEffect } from "react";
import CardMovies from "./CardMovies";
import axios from "axios";

let a = {
    title: 'Total de categorias',
    color: 'primary',
    icon: 'film'
}
let b = {
    title: 'Total de productos',
    color: 'success',
    icon: 'award'
}
let c = {
    title: 'Total de usuarios',
    color: 'warning',
    icon: 'user'
}

function ContentRowMovies() {

    const [totalC, setTotalC] = useState('');
    const [totalP, setTotalP] = useState([]);
    const [totalU, setTotalU] = useState([]);

    useEffect(() => {
        const products = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/products');
                setTotalC(Object.keys(response.data.countByCategory).length.toString())
                setTotalP(response.data.total)
                console.log(response.data);
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
                setTotalU(response.data.total)
            } catch (error) {
                console.log(error);
            }
        };
        users();
    }, [])

    // useEffect(() => {
    //     const user = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:5001/api/0b419a21-03d8-4e9f-a9ed-c14569cdd9a0/users`);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     user();
    // }, [])

    return (
        <>
            {totalC !== '' && <CardMovies contenido={totalC} {...a} key={totalC} />}
            {totalP !== '' && <CardMovies contenido={totalP} {...b} key={totalP} />}
            {totalU !== '' && <CardMovies contenido={totalU} {...c} key={totalU} />}

            {/* {products && cards.map((el, i) => {
                return <CardMovies {...el} key={el + i} />
            })} */}
        </>
    )
};

export default ContentRowMovies;