import React from "react";

function Category(props) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">

                    <span>{props.texto}</span>
                </div>
            </div>
        </div>
    )
}

export default Category;