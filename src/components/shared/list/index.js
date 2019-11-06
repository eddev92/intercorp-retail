import React from 'react';
import ClientComponent from '../client';
import '../../../styles/list.css';

const ListComponent = ({ clients = [1,2,3,4,5,6,7,8,9] }) => {
  const list = clients.map(client => <ClientComponent client={client}/>)
    return (
    <ul className="main-list-clients">
      {
        list 
      }
    </ul>
    )
}

export default ListComponent;
