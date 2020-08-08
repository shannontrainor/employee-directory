import React from "react";

function TableRow(props) {
    const {imgSrc,
    name,
    email,
    phone } = props

    return (<tr>
        <td><img src={imgSrc} alt={name}/></td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
    </tr>
    );
}

export default TableRow;