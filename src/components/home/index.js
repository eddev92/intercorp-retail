import React from 'react';
import FormComponent from '../shared/form';
import './../../styles/home.css';

const HomeComponent = ({ addClient = true, newClient = {} }) => {
  if (addClient) return <FormComponent newClient={newClient} />

  return (
    <div>
      BIENVENIDO AL SISTEMA DE CLIENTE INTERCORP RETAIL
    </div>
  )
}

export default HomeComponent;
