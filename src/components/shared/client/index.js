import React from 'react';
import '../../../styles/client.css';

const ClientComponent = ({ client = {} }) => {
  return (
    <li className="main-client-card row">
      <div className="col-4 section-img">
      <img src="images/img_avatar.png" />
      </div>
      <div className="col-8">
        <ul>
          <li>Nombres</li>
          <li>Apellidos</li>
          <li>Edad</li>
          <li>Fecha de nacimiento</li>
        </ul>
      </div>
    </li>
  )
}

export default ClientComponent;
