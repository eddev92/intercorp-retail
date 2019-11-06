import React from 'react';
import '../../../styles/form.css';

const FormComponent = ({ newClient = {} }) => {
  return (
    <div className="main-new-client">
      <div className="row img-client">
        <img src="images/img_avatar.png" />
      </div>
        <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Nombres</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Apellidos</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Edad</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Fecha de nacimiento</label>
    <div class="col-sm-10">
      <input type="date" class="form-control" id="colFormLabel" placeholder="col-form-label"/>
    </div>
  </div>
            <div className="row buttons">
              <button class="add-client">AGREGAR</button>
              <button class="add-client">CANCELAR</button>
            </div>  
    </div>
  )
}

export default FormComponent;
