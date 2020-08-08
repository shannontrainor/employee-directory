import React from 'react';
import Table from  './Table';

function TableHeader({headings}) {
  return (
    <div className="Table">
        <table className= "table">
            <thead>
              {headings && (headings.map(item => {
                return <th>{item}</th>
              })
              )}

              {/* <tr> */}
                {/* headers at tops of columns */}
                {/* <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr> */}
            </thead>
          
            <Table />
        </table>
    </div>
  );
}

export default TableHeader;