import React from 'react';

const TeamModal = ({ onChange, onSubmit, modalControls }) => (
  <div className="modal is-active">
    <div className="modal-background" />
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Registro Empleado</p>
        <button className="delete" onClick={modalControls} />
      </header>
      <section className="modal-card-body">
        <input type="text" className="input" placeholder="Nombre" />
      </section>
      <footer className="modal-card-footer" />
    </div>
    <div className="modal-content">
      <p className="title">Hola Modal</p>
    </div>
  </div>
);

export default TeamModal;
