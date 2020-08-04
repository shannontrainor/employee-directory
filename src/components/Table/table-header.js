import React from 'react';
import './Table.css';

function Table() {
  return (
    <div className="Table">
        <table className= "table">
            <thead>
                {/* headers at tops of columns */}
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </thead>
        </table>
    </div>
  );
}

export default Table;