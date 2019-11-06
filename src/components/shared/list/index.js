import React from 'react';
import ClientComponent from '../client';
import '../../../styles/list.css';

const ListComponent = ({ clients = [], deleteClient = () => {}, showProbability = () => {} }) => {
  const list = clients.map((client, index) => <ClientComponent position={index} client={client} deleteClient={deleteClient} showProbability={showProbability} />)

  if (clients.length === 0) return (
    <div className="empty-clients">
      NO EXISTEN CLIENTES REGISTRADOS
    </div>
  )
    return (
    <ul className="main-list-clients">
      {
        list 
      }
    </ul>
    )
}

export default ListComponent;
