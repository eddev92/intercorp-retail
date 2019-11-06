import React from 'react';
import FormComponent from '../shared/form';
import './../../styles/home.css';

const HomeComponent = ({ showAddClient = false, client = {} , hiddenAddClient = () => {}}) => {
  console.log(showAddClient)
  if (showAddClient) return <FormComponent newClient={client} hiddenAddClient={hiddenAddClient}/>

  return (
    <div>
      BIENVENIDO AL SISTEMA DE CLIENTE INTERCORP RETAIL
    </div>
  )
}

export default HomeComponent;
