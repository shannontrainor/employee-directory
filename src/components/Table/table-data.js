import React, { Component } from 'react';
import Nav from '../Nav';
import TableHeader from '../Table/table-header';
import API from '../../utlis/API';

class TableData extends Component{
  state ={
    users: [{}]
  }


componentDidMount() {
  API.getUsers().then( res =>{
    console.log('res', res);
    this.setState({
      users: res.data.results
    })
  })
}

render(){
  console.log('state', this.state.users)
  return (
    <div className="Table">
        <Nav />
        <TableHeader />
    </div>
  );
}

}

export default TableData;

//Make the API  call to get random users
//HandleSearch 
  //filter