import Category from './Category';
import axios from 'axios'
import React, { useState, useEffect } from 'react';

function GenresInDb() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const products = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/products');
                setProducts(response.data.countByCategory)
                console.log(response.data.countByCategory)
            } catch (error) {
                console.log(error);
            }
        };
        products();
    }, [])
    return (
        <>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Categorias en la base de datos</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <Category key={'hola'} texto={'Adulto'} total={products.contAdulto} />
                            <Category key={'soy'} texto={'Deportiva'} total={products.contDeportiva} />
                            <Category key={'camilo'} texto={'Marca'} total={products.contMarca} />
                            <Category key={'hardcodeando'} texto={'Niño'} total={products.contNino} />
                            <Category key={'codigo'} texto={'Sombrero'} total={products.contSombrero} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenresInDb;