import React from "react";

function RowTableUsers(props) {
    return (
        <tr>
            <td><img src={`http://localhost:5001/images/fotosUsuario/${props.col4}`} alt="imageasdf" width={"60px"} height={"60px"} /></td>
            <td><a target="_blank" rel="noreferrer" href={`http://localhost:5001/user/${props.id}/detalle`}>{props.col1}</a></td>
            <td>{props.col2}</td>
            <td>{props.col3}</td>
            <td>{props.col5}</td>
        </tr>
    )
}

export default RowTableUsers;