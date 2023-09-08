import React, { useState, useEffect } from "react";
import axios from "axios";

function LastMovieDataBase() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const product = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/products');
                setProduct(response.data.data[response.data.total - 1]);
                console.log();
            } catch (error) {
                console.log(error);
            }
        };
        product();
    }, [])

    return (
        <>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto publicado</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={`http://localhost:5001/images/fotosProducto/${product.image}`} alt=" Star Wars - Mandalorian " />
                        </div>
                        <p>{product.description}</p>
                        <a className="btn btn-danger" target="_blank" rel="noreferrer" href={`http://localhost:5001/products/${product.id}/detalle`}>Ver más detalles del producto</a>
                    </div>
                </div>
            </div >
        </>
    )
}

export default LastMovieDataBase;
