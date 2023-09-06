import React from 'react';
import Category from './Category';

function GenresInDb() {

    return (
        <>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Categorias en la base de datos</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <Category key={'hola'} texto={'Adulto'} />
                            <Category key={'soy'} texto={'Deportiva'} />
                            <Category key={'camilo'} texto={'Marca'} />
                            <Category key={'hardcodeando'} texto={'Niño'} />
                            <Category key={'codigo'} texto={'Sombrero'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenresInDb;