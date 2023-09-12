import React, { useState, useEffect } from "react";
import axios from "axios";

function LastUserDataBase() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const user = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/users');
                const sortedData = response.data.data.slice().sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                setUser(sortedData[0]);
            } catch (error) {
                console.log(error);
            }
        };
        user();
    }, [])

    return (
        <>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Ultimo usuario registrado</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={`http://localhost:5001/images/fotosUsuario/${user.image}`} alt="user" />
                        </div>
                        <p>{user.email}</p>
                        <a className="btn btn-danger" target="_blank" rel="noreferrer" href={`http://localhost:5001/user/${user.id}/detalle`}>Ver más detalles del usuario</a>
                    </div>
                </div>
            </div >
        </>
    )
}

export default LastUserDataBase;
