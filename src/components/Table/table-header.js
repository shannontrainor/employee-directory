import React from 'react';
import Table from  './Table';

function TableHeader() {
  return (
    <div className="Table">
        <table className= "table">
            <thead>
              <tr>
                {/* headers at tops of columns */}
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                </tr>
            </thead>
          
            <Table />
        </table>
    </div>
  );
}

export default TableHeader;