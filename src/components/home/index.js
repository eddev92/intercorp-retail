import React from 'react';
import FormComponent from '../shared/form';
import './../../styles/home.css';

const HomeComponent = ({ showAddClient = false, client = {} , hiddenAddClient = () => {}, handleChange = () => {}, addClient = () => {} }) => {
  console.log(showAddClient)
  // if (showAddClient) return 

  return (
    <div className="main-home">
      <span>
         BIENVENIDO AL SISTEMA DE CLIENTE INTERCORP RETAIL
      </span>
      {
        showAddClient && <FormComponent newClient={client} hiddenAddClient={hiddenAddClient} handleChange={handleChange} addClient={addClient} />
      }
    </div>
  )
}

export default HomeComponent;
