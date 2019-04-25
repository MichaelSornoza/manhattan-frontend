import React from 'react';

const TeamModalEditForm = ({ onChange, onSubmit, modalCloseControl }) => {
  return (
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Editar Empleado</p>
        <button className="delete" onClick={modalCloseControl} />
      </header>
      <section className="modal-card-body">
        <form onSubmit={onSubmit} />
        <div className="field">
          <div className="control">
            <input
              type="text"
              className="input"
              name="full-name"
              onChange={onChange}
              placeholder="Full Name"
            />
          </div>
          <div className="control">
            <input
              type="email"
              className="input"
              name="email"
              onChange={onChange}
              placeholder="example@example.com"
            />
          </div>
          <div className="control">
            <input
              type="password"
              className="input"
              name="password"
              onChange={onChange}
              placeholder="Password"
            />
          </div>
        </div>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success">Guardar</button>
        <button className="button is-danger" onClick={modalCloseControl}>
          Cancelar
        </button>
      </footer>
    </div>
  );
};

export default TeamModalEditForm;
