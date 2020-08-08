import React, {useState} from 'react';
import TableHeader from "./table-header";
import TableRow from "./table-row";


function Table() {
    const [users, setUsers] = useState(null);
    if (!users) {
        fetch("https://randomuser.me/api/?results=10&nat=us").then(res => {
            res.json().then(json => {
                setUsers(json.results)
            })
        })
    }
  return (
        <tbody>
            <TableHeader headings={["", "Name", "Email", "Phone Number"]} />
            {users && users.map (item => {
                return <TableRow imgSrc={item.picture.thumbnail}
                name={`${item.name.first} ${item.name.last}`}
                email={`${item.email}`}
                phone={`${item.phone}`}
                />
            }
            )}
            {/* <tr>
                <td>Image</td>
            </tr>
            <tr>
                <td>Name</td>
            </tr>
            <tr>
                <td>Email</td>
            </tr>
            <tr>
                <td>Phone</td>
            </tr> */}
        </tbody>

  );
}

export default Table;


//table will have table header & table data