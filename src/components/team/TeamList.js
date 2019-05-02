import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Redirect } from 'react-router-dom';

import { DeleteEmployee } from '../../mutations/DeleteEmployee';

import './TeamList.scss';

class TeamList extends Component {
  handleDeleteEmployee = (e, delete_my_employe) => {
    e.preventDefault();
    console.log('is executing');
    delete_my_employe()
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  render() {
    const { team, handleOpenModal } = this.props;

    return (
      <div className="cards-container">
        {team.map(person => (
          <Mutation mutation={DeleteEmployee} variables={{ id: person.id }}>
            {(delete_my_employe, { data, loading, error }) => (
              <div
                onClick={e => handleOpenModal(e, person.id)}
                name="modal-edit"
                key={person.id}
                className="card team-card"
              >
                {error && <h1 className="title">Error al borrar empleado</h1>}
                {data && <Redirect to="/team" />}
                <div className="card-image">
                  <figure className="image is-square">
                    <img
                      src="https://bulma.io/images/placeholders/1280x960.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img
                          src="https://bulma.io/images/placeholders/96x96.png"
                          alt="Placeholder image"
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="is-4 is-white">{person.fullname}</p>
                      <p className="is-6 is-white">Cargo: {person.role}</p>
                    </div>
                  </div>
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                  </div>
                </div>
                <button
                  className="button is-danger"
                  onClick={e => this.handleDeleteEmployee(e, delete_my_employe)}
                >
                  Elimiar Empleado
                </button>
              </div>
            )}
          </Mutation>
        ))}
      </div>
    );
  }
}

export default TeamList;
