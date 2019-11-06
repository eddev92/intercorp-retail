import React from 'react';
import '../../../styles/form.css';

const FormComponent = ({ newClient = {}, addCLient = () => {}, hiddenAddClient = () => {} }) => {
  return (
    <div className="main-new-client">
      <div className="row img-client">
        <img src="images/img_avatar.png" />
      </div>
        <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Nombres</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" value={newClient.name} id="colFormLabel" placeholder="col-form-label"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Apellidos</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" value={newClient.name} id="colFormLabel" placeholder="col-form-label"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Edad</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" value={newClient.age} id="colFormLabel" placeholder="col-form-label"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Fecha de nacimiento</label>
    <div class="col-sm-10">
      <input type="date" class="form-control" value={newClient.date} id="colFormLabel" placeholder="col-form-label"/>
    </div>
  </div>
      <div className="row">
        <button class="col-5" onClick={addCLient}>AGREGAR</button>
        <button class="col-5" onClick={hiddenAddClient}>CANCELAR</button>
      </div>  
    </div>
  )
}

export default FormComponent;
