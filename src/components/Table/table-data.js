import React from 'react';
import './Table.css';

function Table() {
  return (
    <div className="Table">
        <table className= "table">
            <Table-Header></Table-Header>
            <Table-Data></Table-Data>
                {/* headers at tops of columns */}
        </table>
    </div>
  );
}

export default Table;