import React from 'react';
import '../../../styles/form.css';

const FormComponent = ({ newClient = {}, hiddenAddClient = () => {}, handleChange = () => {}, addClient = () => {} }) => {
  return (
    <div className="main-new-client">
      <div className="row img-client">
        <img src="images/img_avatar.png" />
      </div>
        <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Nombres</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" onChange={handleChange.bind(this)} value={newClient.names} id="names" placeholder=""/>
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Apellidos</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" onChange={handleChange.bind(this)} value={newClient.lastNames} id="lastNames" placeholder=""/>
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Edad</label>
    <div class="col-sm-10">
      <input type="number" maxLength={2} class="form-control" onChange={handleChange.bind(this)} value={newClient.age} id="age" placeholder=""/>
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Fecha de nacimiento</label>
    <div class="col-sm-10">
      <input type="date" class="form-control" onChange={handleChange.bind(this)} value={newClient.date} id="date" placeholder=""/>
    </div>
  </div>
      <div className="row">
        <button class="col-5" onClick={addClient}>AGREGAR</button>
        <button class="col-5" onClick={hiddenAddClient}>CANCELAR</button>
      </div>  
    </div>
  )
}

export default FormComponent;
