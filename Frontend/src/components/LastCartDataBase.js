import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

function LastUserDataBase() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cart = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/carts');
                setCart(response.data.data[response.data.total - 1]);
            } catch (error) {
                console.log(error);
            }
        };
        cart();
    }, [])

    return (
        <>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Ultimo carrito comprado</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <Table hover>
                                <thead>
                                    <tr>
                                        <th>ID carrito</th>
                                        <th>ID usuario</th>
                                        <th>Metodo de envio</th>
                                        <th>Metodo de pago</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{cart.id_user}</td>
                                        <td>{cart.id}</td>
                                        <td>{cart.shippingMethod}</td>
                                        <td>{cart.paymentMethod}</td>
                                        <td>{cart.total}</td>
                                    </tr>
                                </tbody>
                            </Table>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default LastUserDataBase;
