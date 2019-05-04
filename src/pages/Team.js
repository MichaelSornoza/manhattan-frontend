import React, { Component } from 'react';
import { Query } from 'react-apollo';

import { TEAM_QUERY } from '../querys/TeamQuerys';

import Header from '../components/layouts/container/Header';
import TeamList from '../components/team/TeamList';
import TeamModalRegister from '../components/team/TeamModalRegister';
import TeamModalEdit from '../components/team/TeamModalEdit';

class Team extends Component {
  state = {
    editModalOpen: false,
    registerModalOpen: false,
    id: ''
  };

  handleOpenEditModal = (e, id) => {
    this.setState({
      id: id,
      editModalOpen: true
    });
  };

  handleOpenRegisterModal = () => {
    this.setState({
      registerModalOpen: true
    });
  };

  handleCloseModal = () => {
    this.setState({
      editModalOpen: false,
      registerModalOpen: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleEditFormChange = e => {
    console.log(e.value);
    this.setState({
      editForm: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="team-page">
        <Header />
        <div className="">
          <div className="has-text-centered">
            <h1 className="title team-title">Equipo de Trabajo</h1>
          </div>
          <div className="buttons team-button-group">
            <button
              className="button is-success"
              name="modal-register"
              onClick={this.handleOpenModal}
            >
              Registrar empleado
            </button>
          </div>
          <div>
            <Query query={TEAM_QUERY}>
              {({ data, loading, error }) => (
                <div>
                  {error && <h1 className="title">{error}</h1>}
                  {loading || !data ? (
                    <h1 className="title">CARGANDO...</h1>
                  ) : (
                    <div>
                      <TeamList
                        team={data.me.employees}
                        handleOpenEditModal={this.handleOpenEditModal}
                      />
                    </div>
                  )}
                </div>
              )}
            </Query>
          </div>
        </div>
        {this.state.editModalOpen && (
          <TeamModalEdit
            id={this.state.id}
            handleCloseModal={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

export default Team;
