import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const TeamModalEditForm = ({
  update_my_employee,
  onChange,
  onSubmit,
  modalCloseControl,
  id
}) => {
  return (
    <Query
      query={gql`
      {
        myEmployee(id: ${id}) {
          fullname
          role
          phone
        }
      }
      `}
    >
      {({ data, loading, error }) => (
        <div>
          {error && <h1 className="title">ERROR...</h1>}
          {loading || !data ? (
            <h1 className="title">Cargando</h1>
          ) : (
            <div className="modal-card">
              {console.log(data)}
              <header className="modal-card-head">
                <p className="modal-card-title">Editar Empleado</p>
                <button className="delete" onClick={modalCloseControl} />
              </header>
              <section className="modal-card-body">
                <form onSubmit={e => onSubmit(e, update_my_employee)} />
                <div className="field">
                  <div className="control">
                    <label htmlFor="fullname" className="label">
                      Fullname
                    </label>
                    <input
                      type="text"
                      className="input"
                      name="fullname"
                      onChange={onChange}
                      placeholder={data.myEmployee.fullname}
                    />
                  </div>
                  <div className="control">
                    <label htmlFor="role" className="label">
                      Role
                    </label>
                    <input
                      type="text"
                      className="input"
                      name="role"
                      onChange={onChange}
                      placeholder={data.myEmployee.role}
                    />
                  </div>
                  <div className="control">
                    <label htmlFor="role" className="label">
                      Role
                    </label>
                    <input
                      type="text"
                      className="input"
                      name="phone"
                      onChange={onChange}
                      placeholder={data.myEmployee.phone}
                    />
                  </div>
                </div>
              </section>
              <footer className="modal-card-foot">
                <button className="button is-success" type="submit">
                  Guardar
                </button>
                <button
                  className="button is-danger"
                  onClick={modalCloseControl}
                >
                  Cancelar
                </button>
              </footer>
            </div>
          )}
        </div>
      )}
    </Query>
  );
};

export default TeamModalEditForm;
