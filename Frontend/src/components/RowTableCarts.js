import React from "react";

function RowTableCarts(props) {
    return (
        <tr>
            <td style={{ color: '#4e73df', cursor: 'pointer' }}>{props.col1}</td>
            <td>{props.col2}</td>
            <td>{props.col3}</td>
            <td>{props.col4}</td>
        </tr>
    )
}

export default RowTableCarts;