import React from 'react';
import '../../../styles/client.css';

const ClientComponent = ({ position = null,  client = { names: '', lastNames: '', age: null, date: '' }, deleteClient = () => {} }) => {
  return (
    <li className="main-client-card row">
      <div className="col-4 section-img">
      <img src="images/img_avatar.png" />
      </div>
      <div className="col-8">
        <div className="info-client-card">
          <span>Nombres: {client.names}</span>
          <span>Apellidos: {client.lastNames}</span>
          <span>Edad: {client.age}</span>
          <span>Fecha de nacimiento: {client.date}</span>
        </div>
        <div className="row">
        <button class="col-5">PROBABILIDAD DE MUERTE</button>
        <button class="col-5" onClick={deleteClient.bind(this, client, position)}>ELIMINAR CLIENTE</button>
        </div>
      </div>
    </li>
  )
}

export default ClientComponent;
